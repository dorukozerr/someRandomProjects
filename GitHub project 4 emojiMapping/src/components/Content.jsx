import React from "react";
import { isPropertySignature } from "typescript";

function Content(props){
    return(
        <dd>
       {props.meaning}
      </dd>
    )
}

export default Content;