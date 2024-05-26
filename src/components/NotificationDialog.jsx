function NotificationDialog({ show, winner, playAgain }) {
  debugger


  return (
    <div id="modal" className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-container">
        <div className="modal-content">
          <p>Player {winner} win!</p>
          <div className="modal-footer">
            <button onClick={playAgain} >Play again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationDialog