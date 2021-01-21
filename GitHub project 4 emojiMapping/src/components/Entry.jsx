import React from "react";
import { isPropertySignature } from "typescript";
import Content from "./Content.jsx";
import Title from "./Title.jsx";

function Entry(props){
 return(
    <div className="term">
  <Title emoji={props.emoji} name={props.name} />
  <Content meaning={props.meaning} />
  </div>
 )   
}

export default Entry;