export function SideBarClass(){
    return (
        <div className="flex">
            <div className="bg-red-400 hidden md:block w-45 h-screen">
                Sidebar
            </div>
            <div className="bg-green-400 w-full h-screen">
                Content
            </div>
        </div>
    )
}