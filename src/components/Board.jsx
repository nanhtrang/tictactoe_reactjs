import { useEffect, useState } from "react"
import Square from "./Square"

function Board() {
  const [boardList, setBoardList] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [isClickedList, setIsClickedList] = useState(Array(9).fill(null))
  const [status, setStatus] = useState()

  function handleClick(index) {
    const tmpIsClickedList = Object.assign([], isClickedList)
    if (tmpIsClickedList.includes(index)) {
      return
    }
    tmpIsClickedList[index] = index
    setIsClickedList(tmpIsClickedList)
    const tmpBoardList = Object.assign([], boardList)
    tmpBoardList[index] = isX ? 'X' : 'O'
    
    setBoardList(tmpBoardList)
    setIsX(!isX)    
    setStatus((!isX ? 'X' : 'O') + ' turn')
  }

  function checkWin() {
    
  }
  return (
    <>
      <div>{status}</div>
      <div className="row">
        <Square value={boardList[0]} onclick={() => {handleClick(0)}} />
        <Square value={boardList[1]} onclick={() => {handleClick(1)}} />
        <Square value={boardList[2]} onclick={() => {handleClick(2)}} />
      </div>
      <div className="row">
        <Square value={boardList[3]} onclick={() => {handleClick(3)}} />
        <Square value={boardList[4]} onclick={() => {handleClick(4)}} />
        <Square value={boardList[5]} onclick={() => {handleClick(5)}} />
      </div>
      <div className="row">
        <Square value={boardList[6]} onclick={() => {handleClick(6)}} />
        <Square value={boardList[7]} onclick={() => {handleClick(7)}} />
        <Square value={boardList[8]} onclick={() => {handleClick(8)}} />
      </div>
    </>
  )
}

export default Board