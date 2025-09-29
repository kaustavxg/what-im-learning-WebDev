import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

//! useDebounce Hook

function App() {
  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const debounceFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <input type="text" onChange={debounceFn}/>
    </div>
  );
}

export default App;
