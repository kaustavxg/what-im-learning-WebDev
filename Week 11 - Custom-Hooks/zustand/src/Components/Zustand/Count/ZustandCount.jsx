import useCounterStore from './Store'

function ZustandCount() {

  const {count, increase, decrease, reset} = useCounterStore();

  return (
    <div>
        <h1>{count}</h1>
        <button 
            onClick={increase}
        >
            increase
        </button>
        <button
            onClick={decrease}
        >
            decrease
        </button>
        <button
            onClick={reset}
        >
            Reset
        </button>
    </div>
  )
}

export default ZustandCount