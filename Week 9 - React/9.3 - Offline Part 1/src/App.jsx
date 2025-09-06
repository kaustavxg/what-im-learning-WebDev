import kaustavPic from './assets/Image_Editor.png'
import mohiniPic from './assets/mohini.jpg'

import { PostComponent } from './Post'

import { useEffect } from 'react'
import { CardComponent } from './Card'
import { useState } from 'react'

//! -------------------------------------------------------------------------------

//! playing with props

export default function App(){

  const [cards, setCards] = useState([]);

  const cardComponent = cards.map(card => <CardComponent
  
    name={`My name is ${card.name} `}
    
    subtitle={`My cast is ${card.subtitle} `}
    date={card.date}
    venue={card.venue}
    time={card.time}
  
  />)

  function addCard(){
    setCards([...cards, {
      name: "Kaustav",
      subtitle: "Gupta",
      date: "13/11/25",
      venue: "London",
      time: "08:00 PM onwards"
    },
    {
      name: "Aarav",
      subtitle: "Sharma",
      date: "20/11/25",
      venue: "Delhi",
      time: "06:00 PM onwards"
    }
    ])
  }


  return <div>
    
    <div>{cardComponent}</div>
    <button onClick={addCard}>Add card</button>

  </div>
}


//! -------------------------------------------------------------------------------

// function App(){
//   const [showTimer, setShowTimer] = useState(false);

//   useEffect(() => {
//     setInterval(() => {
//       setShowTimer(currentValue => !currentValue)
//       console.log(`timer off for 5 seconds`);
//     }, 5000)

//   },  [])

//   return <div>
//     {showTimer && <Timer/>}
//   </div>

// }

// function Timer(){
//   const[seconds, setSeconds] = useState(0);

  
//   useEffect(() => {
//     const clock = setInterval(() => {
//       setSeconds(prev => prev + 1)
//     }, 1000)


//     return function(){
//       clearInterval(clock);
//     }

//   },  [])

//   return <div>
//     {seconds} seconds elapsed
//   </div>

// }


//! -------------------------------------------------------------------------------

//! fetching todo from backend
// function App(){

//   const [currentTab, setCurrentTab] = useState();
//   const [tabData, setTabData] = useState({});

//   useEffect(() => {
//     // send a backend request to get data from this tab
//     console.log(`send req to backend to collect data`);
    
//     fetch("https://jsonplaceholder.typicode.com/todos/1" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//       })
//       .catch(error => {
//         console.log(`error: ${error}`);
        
//       })
//   }, [currentTab]) // jab jab currentTab change hoga, this useEffect will render

//   return <div>
//     <button 
//       onClick={function(){ setCurrentTab(1)}} 
//       style={{
//         color: currentTab  == "1" ? "red" : "black"
//       }}>
//         Todo #1
//     </button>

//     <button 
//       onClick={() => {setCurrentTab(2)}} 
//       style={{
//         color: currentTab == 2 ? "red" : "black"
//       }}>
//         Todo #2
//     </button>

//     <button
//       onClick={() => {
//         setCurrentTab(3)
//       }}
//        style={{
//       color: currentTab == 3 ? "red" : "black"
//     }}>
//      Todo 3
//     </button>

//     <button 
//       onClick={() => {
//         setCurrentTab(4)
//       }}
//       style={{
//       color: currentTab == 4 ? "red" : "black"
//     }}>
//       Todo #4
//     </button>

//     {tabData.title}

//   </div>
// }

//! -------------------------------------------------------------------------------


//! Linkedin notification 
// function App() {
//   const [count, setCount] = useState(0)

//   // function incrementCount() {
//   //   setCount(function(currentValue){
//   //     return currentValue + 1
//   //   });
//   // }

//   //? ================== OR ==================
//   function incrementCount(){
//     setCount(currentValue => currentValue + 1);
//     console.log(`count has been updated to: ${count}`);
//   }


//     // function sum(a, b){
//     //   return a + b;
//     // }

//     // (a, b) => {a + b};


//   useEffect(() => {
//     console.log("above set interval");
//     const intervalId = setInterval(incrementCount, 1000);
//     console.log("inside set interval");

//     return () => {
//       clearInterval(intervalId);
//     }

//   }, []) // dependecency array, the array is empty 

//   useEffect(() => { // runs anytime, the count changes
//     console.log(`the count has been updated to: ${count}`);
//   }, [count])
  

//   return (
//     <div>
//           {count}
//     </div>
//   )
// }


//! -------------------------------------------------------------------------------


//! Linkedin post 
// function App() {

//   const [posts, setPosts] = useState([]);

//   const postComponent  = posts.map(post => <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.time}
//     image={post.image}
//     description={post.description}
//   />)

//   function addPost() {
//     setPosts([...posts, {
//       name: "John Deph",
//       subtitle: "5000",
//       time: "52",
//       image: mohiniPic,
//       description: "i am john deph, the ceo of deph technologies"
//     }])
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost}>Add Post</button>

    
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           {postComponent}
//         </div>
//       </div>
//     </div>
//   )
// }


//! -------------------------------------------------------------------------------