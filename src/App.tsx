import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const{count,increment,decrement,reset}= useCounter(0)
  return (
    <>
      <h1>{count}</h1> 
      <div> 
        <button onClick={increment}>increase</button>
        <button onClick={decrement} style={{margin: 20}} disabled={count==0}>decrease</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App
