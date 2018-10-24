import React from "react";

const Child = props => {
  return(
  <div>
    <button onClick={props.doSomething}>{props.title}</button>
    <p>{props.parentData}</p>
  </div>
)
};

export default Child;
