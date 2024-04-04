import os
from PIL import Image
import json

# Der Pfad zum Verzeichnis, das die .webp-Dateien enthält
directory_path = './'

# Ein leeres Dictionary, um die Daten zu speichern
images_info = {}

# Durchläuft alle Dateien im angegebenen Verzeichnis
# Durchläuft alle Dateien im angegebenen Verzeichnis
images_info = []

for filename in os.listdir(directory_path):
    if filename.endswith(".webp"):
        # Bildpfad zusammenstellen
        file_path = os.path.join(directory_path, filename)
        
        # Bild öffnen und Dimensionen ermitteln
        with Image.open(file_path) as img:
            width, height = img.size
        
        # Informationen zur Liste hinzufügen
        images_info.append({'name': filename, 'width': width, 'height': height})

# JSON-Datei mit den Bildinformationen erstellen
json_file_path = os.path.join(directory_path, 'images_info.json')
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(images_info, json_file, ensure_ascii=False, indent=4)
