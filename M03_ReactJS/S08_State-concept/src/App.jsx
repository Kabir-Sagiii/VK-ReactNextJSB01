import {useState} from "react"

function App() {
  var [state,setState] = useState("Welcome to React JS")

  function updateData(){
        setState("Hello ReactJS")
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={updateData}>Update</button>
    </div>
  )
}

export default App