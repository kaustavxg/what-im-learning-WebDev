import React from "react";

function Practise() {
  return (
    <div>
      {/* ====== MOBILE FIRST ====== */}
      {/* <div className='grid md:grid-cols-3 sm:grid-rows-3 grid-rows-3'>
      <div className='m-2 p-2 bg-red-400'>Grid 1</div>
      <div className='m-2 p-2 bg-blue-400'>Grid 2</div>
      <div className='m-2 p-2 bg-pink-400'>Grid 3</div>
    </div> */}

      {/* ====== GRIDS ====== */}
      {/* <div className='grid grid-cols-12'>
      <div className='bg-red-400 col-span-3 p-2 m-2'>Grid 1</div>
      <div className='bg-blue-400 col-span-5 p-2 m-2 '>Grid 2</div>
      <div className='bg-pink-400 col-span-4 m-2 p-2'>Grid 3</div> */}
      {/* is div mein 12 cols hai, 
      col-span means ek div kitne cols ki jagha le rha hai */}

      {/* </div>

    <div className='grid grid-rows-10'>
        <div className='m-2 p-2 bg-orange-400 row-span-2'>Row 1</div>
        <div className='m-2 p-2 row-span-5 bg-green-400'>Row 2</div>
        <div className='p-2 m-2 bg-yellow-600 row-span-2'>Row 3</div>
        <div className='m-2 p-2 bg-purple-400'>Row 4</div>
    
    </div> */}

      {/* ======== FLEX =========  */}
      {/* <div style={{display: "flex", justifyContent: "space-between"}}><div/> */}
      {/* <div className='flex justify-between'>
        <div className='bg-blue-500 m-1 p-2'>Hi everyone</div>
        <div className='bg-red-400 m-1 p-2'>Hello Ji</div>
        <div className='bg-orange-400 m-1 p-2'>I am here</div>
    </div> */}
    </div>
  );
}

export default Practise;
