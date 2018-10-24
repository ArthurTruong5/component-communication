import React from 'react';
import Child from "./Child";

const Parent = (props) => {
  // The sperad operator is used to pass all the props from grandParent (App) to the parent
  // Also parent can pass their own properties
  return(
    <Child {...props} parentData="Data coming from parent"/>
  )
};

export default Parent;
