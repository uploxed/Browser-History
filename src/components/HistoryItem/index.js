import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <div className="con">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
