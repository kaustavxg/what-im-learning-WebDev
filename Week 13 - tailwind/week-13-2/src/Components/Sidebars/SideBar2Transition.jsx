export const Sidebar2Transition = () => {
    return (
        <div className="flex"> 
            <button className="transition-all ease-in-out duration-150 bg-red-400 md:w-96 h-screen w-0">
                Sidebar
            </button>
            <button className="bg-green-800 h-screen flex-1">
                Content
            </button>
        </div>
    )
}