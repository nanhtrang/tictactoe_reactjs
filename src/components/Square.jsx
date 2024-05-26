import { useEffect, useState } from "react";

function Square({ value, className, turn, onclick }) {

  const [isClick, setClicked] = useState(false)

  useEffect(() => {
    if (value === null) {
      console.log(value)
      setClicked(false)
    }
  }, [value])

  const onMouseEnter = function (e) {    
    if (!isClick) {
      e.target.innerText = turn ? 'X' : 'O'
    }
  }

  const onMouseLeave = function (e) {
    if (!isClick) {
      e.target.textContent = ''
    }
  }

  const handleClick = function (e) {
    if (e.target.classList.contains('active-x') || e.target.classList.contains('active-o')) {
      return
    }
    e.target.innerText = value
    setClicked(true)
    e.target.classList.add(`active-${turn ? 'x' : 'o'}`)
    return onclick(e)
  }
  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={className + ' square'}>
        {value}
      </div>
    </>
  )
}

export default Square