import './index.css'

const History = props => {
  const {list, delhis} = props

  const onDelete = () => {
    delhis(list.id)
  }
  return (
    <li className="his-con1">
      <div className="his-con2">
        <p className="his-time">{list.timeAccessed}</p>

        <div className="his-con3">
          <img
            src={list.logoUrl}
            alt="history-domain-logo"
            className="his-logo"
          />
          <div className="his-con4">
            <p className="history-title">{list.title}</p>
            <p className="dom-url">{list.domainUrl}</p>
          </div>
        </div>
      </div>
      <button className="del-btn" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="del-icon"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default History
