
export default function IconPhone({ className, onClick}: { className?: string, onClick?: () => {} }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
    >
      <path
        d="M15.22 20.64a20.37 20.37 0 0 0 7.4 4.79l3.77-3a.67.67 0 0 1 .76 0l7 4.51a2 2 0 0 1 .33 3.18l-3.28 3.24a4 4 0 0 1-3.63 1.07a35.09 35.09 0 0 1-17.15-9A33.79 33.79 0 0 1 1.15 8.6a3.78 3.78 0 0 1 1.1-3.55l3.4-3.28a2 2 0 0 1 3.12.32L13.43 9a.63.63 0 0 1 0 .75l-3.07 3.69a19.75 19.75 0 0 0 4.86 7.2Z"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  )
}
