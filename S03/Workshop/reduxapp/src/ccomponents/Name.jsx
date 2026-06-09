import { useRef } from "react";
import store from "../store/Store.js";

function Name() {
  const inputRef = useRef();

  function handleData() {
    //1.Access data from textbox (input element)
    const data = inputRef.current.value;

    //2.Call the dispatch and pass Component data to dispatch in a object format called action
    store.dispatch({ type: "name", payload: data });
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Name Component</h1>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Name;
