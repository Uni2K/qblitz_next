export default function IconDelete({className, onClick}: { className?: string, onClick?: () => {} }) {
    return <svg className={className} onClick={onClick} viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.90728 10.4447L7.85182 8.50016L5.90728 6.55562L6.55546 5.90743L8.5 7.85198L10.4445 5.90743L11.0927 6.55562L9.14818 8.50016L11.0927 10.4447L10.4445 11.0929L8.5 9.14834L6.55546 11.0929L5.90728 10.4447Z"/>
    </svg>
}

