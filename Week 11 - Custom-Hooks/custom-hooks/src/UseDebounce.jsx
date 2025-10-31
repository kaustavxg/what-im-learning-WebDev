import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function Debounce(){

    async function sendDataToBackend(){
        const response = await fetch("api.amazon.com/search");
        const json = await response.json;
    }

    const debounceFn = useDebounce(sendDataToBackend);

    return (
        <div>
            <input type="text" onChange={debounceFn} />
        </div>
    )

}

export default Debounce