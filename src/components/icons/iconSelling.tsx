export default function IconSelling({className, onClick}: { className?: string, onClick?: () => {} }) {
    return <svg xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick} viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6m7 .6v2.5M10 20v2.5M14 4V1.5M10 4V1.5M7 12H4.5m15 0H17M7 6.5H4.5m15 0H17m-10 11H4.5m15 0H17"/>
    </svg>

}

