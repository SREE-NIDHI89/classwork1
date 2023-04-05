import React from "react";

function Entry(props) {
  return (
    <div style={{textAlign:"left"}}>
      <img  style={{height:"200px",width:"200px"}} src={props.imgUrl}></img>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
       <hr></hr>
    </div>
  );
}

export default Entry;