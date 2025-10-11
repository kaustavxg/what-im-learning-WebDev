export function Button({disabled, children, onClick}) {

  return (
    <div 
        onClick={onClick} 
        className={`px-34 py-3 text-xl font-bold rounded-lg transition-colors
          ${disabled 
            ? "bg-[#1f366d] text-white" 
            : "bg-[#00deca] text-black" 
          }`}
    >
        {children}
    </div>
  )
}
