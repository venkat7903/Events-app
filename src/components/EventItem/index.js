// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, clickActiveEvent} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeEventClassName = isActive ? `event-img active-img` : 'event-img'

  const onClickEvent = () => {
    clickActiveEvent(id)
  }

  return (
    <li className="event-card-item">
      <button type="button" className="event-btn">
        <img
          src={imageUrl}
          alt="event"
          className={activeEventClassName}
          onClick={onClickEvent}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
