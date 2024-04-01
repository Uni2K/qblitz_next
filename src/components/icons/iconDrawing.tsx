export default function IconDrawing({className, onClick}: { className?: string, onClick?: () => {} }) {
    return (<svg className={className}
                 onClick={onClick} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.3125 23.1562C21.8831 23.1562 23.1562 21.8831 23.1562 20.3125C23.1562 18.7419 21.8831 17.4688 20.3125 17.4688C18.7419 17.4688 17.4688 18.7419 17.4688 20.3125C17.4688 21.8831 18.7419 23.1562 20.3125 23.1562Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M5.6875 23.1562C7.25806 23.1562 8.53125 21.8831 8.53125 20.3125C8.53125 18.7419 7.25806 17.4688 5.6875 17.4688C4.11694 17.4688 2.84375 18.7419 2.84375 20.3125C2.84375 21.8831 4.11694 23.1562 5.6875 23.1562Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M5.6875 8.53125C7.25806 8.53125 8.53125 7.25806 8.53125 5.6875C8.53125 4.11694 7.25806 2.84375 5.6875 2.84375C4.11694 2.84375 2.84375 4.11694 2.84375 5.6875C2.84375 7.25806 4.11694 8.53125 5.6875 8.53125Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M12.5938 4.46875H13.4062M17.4688 4.46875H18.2812M20.7188 8.53125V7.71875M20.7188 12.5938V13.4062M6.09375 9.34375V16.6562"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}
