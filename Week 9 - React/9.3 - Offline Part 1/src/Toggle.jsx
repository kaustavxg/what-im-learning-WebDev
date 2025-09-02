const ToggleMessage = () => {
  const [notificationCount, setNotificationCount] = useState(0); // defining a new state variable
  /*        ⬆️          ⬆️
          [true,      function] 

  */
  // when the value of a state variable changes,
  // the component that use the state variable re renders
    console.log("re-render");
    function increment(){
      setNotificationCount(notificationCount + 1)
    }
    console.log("rendering complete");
    

  return(
    <div>
      
      <button onClick={increment}>
        Increase count
      </button>
      <br></br>
      {notificationCount}
      <br></br>

    </div>
  )

}