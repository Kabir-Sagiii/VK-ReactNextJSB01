import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const redux_data = useSelector((storeData) => {
    //logic or operation
    return storeData;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h1>Details Component</h1>
      <h3>User Name : {redux_data}</h3>
    </div>
  );
}

export default Details;
