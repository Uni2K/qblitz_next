export default function IconChevron({className, onClick}: { className?: string, onClick?: () => {} }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={className} onClick={onClick} viewBox="0 0 24 24">
        <path
              d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275Z"/>
    </svg>
}

