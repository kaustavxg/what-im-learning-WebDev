import React, { useEffect, useState } from 'react'
import './App.css'
import CounterHook from './Hooks/01Counting/Counter'
import Fetching from './Hooks/02Fetch/FetchingHardCoded'
import { useFetch, usePostTitle } from './Hooks/02Fetch/useFetch'
import FinalReFetch from './Hooks/03reFetch/FinalReFetch'



function App(){
  
  return <div>



    
    {/* RE-FETCH */}

   <FinalReFetch/>
  </div>
}

export default App



// function App() {

//   // const postTitle = usePostTitle();
  
//   // const {finalData} = useFetch('https://jsonplaceholder.typicode.com/posts/1')

//   const [url, setUrl] = useState('')
//   const [fetchUrl, setFetchUrl] = useState('');
  

//   function getUrlDetails(){
//    setFetchUrl(url)
//   }

//   const {finalData} = useFetch(fetchUrl)

//   return (
//     <div>
//       {/* <CounterHook/> */}
//       {/* <Fetching/> */}

//       <div>
//         <label htmlFor="url">URL:  </label>
//         <input
//           value={url}
//           onChange={(e) => {
//             setUrl(e.target.value)
//           }} 
//           type="text" 
//           placeholder='enter url'
//         />

//         <button
//           onClick={getUrlDetails}
//         >
//           Fetch Details
//         </button>
//         <span>{JSON.stringify(finalData.title)}</span>
//       </div>

//     </div>
//   )
// }

// export default App