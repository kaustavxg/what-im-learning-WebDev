import React from 'react';

//! Error boundary
function App(){

}

export default App



// const Modal = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <div style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <div style={{
//                 background: 'white',
//                 padding: '20px',
//                 borderRadius: '5px',
//             }}>
//                 <button onClick={onClose}>Close</button>
//                 {children}
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setModalOpen(true)}>Open Modal</button>
//             <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
//                 <h2>Modal Title Kaustav</h2>
//                 <p>This is some content inside the modal.</p>
//             </Modal>
//         </div>
//     );
// };

// export default App;

//? =========================================================================================

//! list and keys
// function App(){

//   return <div>
//       {[
//           <Todo key={1} title={"Go to gym"} done={false}/>,
//           <Todo key={2} title={"Go to gym"} done={false}/>
//       ]}
//   </div>

//   function Todo({title, done}){
//     return <div>
//       {title} - {done ? "Done" : "Please finish you work"}
//     </div>
//   }

// }



//? =========================================================================================


//! children
// function App(){
//
//   const todos = [{
//     title: "go to gym",
//     done: true
//   }, {
//     title: "eat food",
//     done: false
//   }];

//   const TodoComponents = todos.map(todo => <Todo 
//       title={todo.title}
//       done={todo.done}
//     />)

//   return <div>
//     {TodoComponents}
//   </div>

//   function Todo({title, done}){
//     return <div>
//       {title} - {done ? "Done" : "Please finish you work"}
//     </div>
//   }

// }



//? =================================================================

//! Children
// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <input type='text'></input>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

