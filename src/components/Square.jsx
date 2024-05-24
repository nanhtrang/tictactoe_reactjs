import { useState } from "react";

function Square({value, onclick}) {

  return (
    <>
      <button onClick={onclick} className="square">
        {value}
      </button>
    </>
  )
}

export default Square