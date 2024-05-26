import { useState } from "react"
import Square from "./Square"
import NotificationDialog from "./NotificationDialog"

function Board() {
  const [boardList, setBoardList] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [isClickedList, setIsClickedList] = useState(Array(9).fill(null))
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)


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
    const winner = checkWin(tmpBoardList)
    const isFull = checkFull(tmpBoardList);
    if (winner) {
      setIsClickedList(Array(9).fill(true))
      setMessage(`Player ${winner} win!`)
      setShowModal(true)
    } else if (!winner && isFull) {
      setMessage('Tied game!')
      setShowModal(true)
    }
  }

  function checkFull(boardList) {
    let count = 0
    for (const square of boardList) {
      if (square != null) {
        count ++
      }
    }
    return count == 9
  }

  function checkWin(boardList) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boardList[a] && boardList[a] === boardList[b] && boardList[a] === boardList[c]) {
        return boardList[a];
      }
    }
    return null;
  }

  function reset() {
    setBoardList(Array(9).fill(null))
    setIsX(true)
    setIsClickedList(Array(9).fill(null))
    setMessage(null)
    const squares = document.getElementsByClassName('square')
    for (const square of squares) {
      square.classList.remove('active-x')
      square.classList.remove('active-o')
      setShowModal(false)
    }
  }


  return (
    <>      
      <div className="row">
        <Square value={boardList[0]} onclick={() => {handleClick(0)}} turn={isX} className='t-l-radius' />
        <Square value={boardList[1]} onclick={() => {handleClick(1)}} turn={isX} />
        <Square value={boardList[2]} onclick={() => {handleClick(2)}} turn={isX} className='t-r-radius' />
      </div>
      <div className="row">
        <Square value={boardList[3]} onclick={() => {handleClick(3)}} turn={isX} />
        <Square value={boardList[4]} onclick={() => {handleClick(4)}} turn={isX} />
        <Square value={boardList[5]} onclick={() => {handleClick(5)}} turn={isX} />
      </div>
      <div className="row">
        <Square value={boardList[6]} onclick={() => {handleClick(6)}} turn={isX} className='b-l-radius' />
        <Square value={boardList[7]} onclick={() => {handleClick(7)}} turn={isX} />
        <Square value={boardList[8]} onclick={() => {handleClick(8)}} turn={isX} className='b-r-radius' />
      </div>
      <button onClick={reset}>Reset</button>
      <NotificationDialog show={showModal} playAgain={reset} message={message}/>
    </>
  )
}

export default Board