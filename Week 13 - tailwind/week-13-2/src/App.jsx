import React, { useState } from "react";
import { SideBarToggle } from "./Components/Icons/SideBarToggle";

function goesBeyondBreakpoint(fn){

}

// useMediaQueries

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  goesBeyondBreakpoint(() => {
    setSideBarOpen(s => !s)
  })

  return (
    <div className="flex">
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  );
}

export default App;

function SideBar({ sideBarOpen, setSideBarOpen }) {
  if(!sideBarOpen){
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setSideBarOpen(!sideBarOpen);
          }}
        >
          <SideBarToggle />
        </div>
      </div>
    );
  } 
    return (
      <div className="w-96 h-screen bg-amber-500">
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setSideBarOpen(!sideBarOpen);
          }}
        >
          <SideBarToggle />
        </div>
      </div>
    );
  }


function MainContent() {
  return (
    <div className="w-full">
      <div className="h-72 bg-black "></div>
      <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 rounded-2xl bg-red-400 md:col-span-2 -translate-y-24 shadow-lg col-span-11 hidden md:block">

        </div>
        <div className="h-96 rounded-2xl bg-green-400 md:col-span-6 shadow-lg col-span-11">

        </div>
        <div className="h-96 rounded-2xl shadow-lg bg-yellow-400 md:col-span-3 col-span-11">

        </div>
      </div>
    </div>
  );
}
