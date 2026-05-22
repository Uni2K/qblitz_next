import os
import tinify
import json
import re
import argparse
from PIL import Image
from tqdm import tqdm

TINYPNG_API_KEY = "v9n4lySdXh95QrQlqPQmVLqg4KTt9T48"
tinify.key = TINYPNG_API_KEY

def process_images():
    input_folder = 'raw_images'
    output_folder = 'public/gallery'
    thumb_folder = 'public/gallery/thumbnails'

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    if not os.path.exists(thumb_folder):
        os.makedirs(thumb_folder)

    valid_extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.JPG')

    image_files = [f for f in os.listdir(input_folder) if f.lower().endswith(valid_extensions)]
    
    if not image_files:
        print("Keine Bilder zum Verarbeiten gefunden.")
        return

    for filename in tqdm(image_files, desc="Verarbeite Bilder", unit="Bild"):
        input_path = os.path.join(input_folder, filename)
        
        base_name = os.path.splitext(filename)[0]
        output_name = base_name + '.webp'
        thumb_name = 'tn_' + output_name
        
        output_path = os.path.join(output_folder, output_name)
        thumb_path = os.path.join(thumb_folder, thumb_name)

        try:
            source = tinify.from_file(input_path)
            converted = source.convert(type="image/webp")
            
            main_image = converted.resize(method="fit", width=1600, height=1200)
            main_image.to_file(output_path)

            thumb_image = converted.resize(method="fit", width=300, height=225)
            thumb_image.to_file(thumb_path)

        except tinify.AccountError as e:
            print(f"\nTinyPNG API Fehler (Key oder Limit): {e}")
            break 
        except Exception as e:
            print(f"\nFehler bei {filename}: {e}")

    print("\nAktualisiere Bild-Index in imageGallery.tsx...")
    update_image_gallery_tsx(thumb_folder)

def update_image_gallery_tsx(thumb_folder='public/gallery/thumbnails'):
    images_info = []
    
    valid_extensions = ('.webp')
    if not os.path.exists(thumb_folder):
        print(f"Fehler: Ordner {thumb_folder} existiert nicht.")
        return

    files = [f for f in os.listdir(thumb_folder) if f.endswith(valid_extensions)]
    
    # Stelle sicher, dass alle Dateien das tn_ Präfix haben
    for i, filename in enumerate(files):
        if not filename.startswith('tn_'):
            old_path = os.path.join(thumb_folder, filename)
            new_filename = 'tn_' + filename
            new_path = os.path.join(thumb_folder, new_filename)
            if not os.path.exists(new_path):
                os.rename(old_path, new_path)
                files[i] = new_filename
            else:
                os.remove(old_path)
                files[i] = None # Markiere zum Entfernen aus der Liste
    
    # Bereinige Liste von gelöschten Duplikaten
    files = [f for f in files if f is not None]
    files.sort()
    
    for filename in files:
        file_path = os.path.join(thumb_folder, filename)
        try:
            with Image.open(file_path) as img:
                width, height = img.size
            images_info.append({
                "src": filename,
                "width": width,
                "height": height
            })
        except Exception as e:
            print(f"Fehler beim Lesen von {filename}: {e}")

    tsx_path = 'src/components/imageGallery.tsx'
    if not os.path.exists(tsx_path):
        print(f"Fehler: {tsx_path} nicht gefunden.")
        return

    with open(tsx_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_json_full = json.dumps(images_info, ensure_ascii=False, indent=4)
    new_json_content = new_json_full.strip()[1:-1].strip()
    
    indented_json = new_json_content.replace('\n', '\n    ')
    
    # Nutze non-greedy matching (.*?) für den Inhalt zwischen den Klammern
    pattern = r'(let fileNames = \[)(.*?)(\];)'
    new_content = re.sub(pattern, r'\1\n    ' + indented_json + r'\n\3', content, flags=re.DOTALL, count=1)

    with open(tsx_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"imageGallery.tsx erfolgreich aktualisiert ({len(images_info)} Bilder).")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bildverarbeitung und Galerie-Update")
    parser.add_argument("--update-only", action="store_true", help="Nur den Bild-Index in imageGallery.tsx aktualisieren")
    args = parser.parse_args()

    if args.update_only:
        update_image_gallery_tsx()
    else:
        process_images()
