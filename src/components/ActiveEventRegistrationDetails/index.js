// Write your code here
import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderYetToRegisterView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registered-img"
      />
      <p className="yet-to-register-desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="register-view-desc">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registered-img"
      />
      <h1 className="register-view-desc">Registrations Are Closed Now!</h1>
      <p className="yet-to-register-desc">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderNoActiveEventView = () => (
    <div className="no-active-view">
      <p className="no-view-event-desc">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegisterView()

    case registrationStatusConstants.registered:
      return renderRegisteredView()

    case registrationStatusConstants.registrationClosed:
      return renderRegistrationClosed()

    default:
      return renderNoActiveEventView()
  }
}

export default ActiveEventRegistrationDetails
