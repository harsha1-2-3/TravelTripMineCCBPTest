import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import TripContext from '../../context/TripContext'
import './index.css'

const stepsList = [
  {
    stepId: 'YOUR_DETAILS',
    displayText: 'Your Details',
  },
  {
    stepId: 'DATE_SELECTION',
    displayText: 'Date Selection',
  },
  {
    stepId: 'GUESTS',
    displayText: 'Guests',
  },
  {
    stepId: 'TRAVEL_ASSISTANCE',
    displayText: 'Travel Assistance',
  },
  {
    stepId: 'CONFIRMATION',
    displayText: 'Confirmation',
  },
]

const travelAssistanceList = [
  {
    value: 'car',
    displayText: 'Car',
    id: 1,
  },
  {
    value: 'flight',
    displayText: 'Flight',
    id: 2,
  },
  {
    value: 'bus',
    displayText: 'Bus',
    id: 3,
  },
  {
    value: 'train',
    displayText: 'Train',
    id: 4,
  },
]

class BookANewTrip extends Component {
  state = {
    activeStepId: stepsList[0].stepId,
    isFilled: '',
    username: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    adults: 1,
    childrens: 0,
    infants: 0,
    needTravel: false,
    activeTravel: 'car',
    isConfirmed: false,
    isLessDate: '',
  }

  onChangeName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeStartLocation = event => {
    this.setState({
      startLocation: event.target.value,
    })
  }

  onChangeEndLocation = event => {
    this.setState({
      endLocation: event.target.value,
    })
  }

  onChangeStartDate = event => {
    this.setState({
      startDate: event.target.value,
    })
  }

  onChangeEndDate = event => {
    this.setState({
      endDate: event.target.value,
    })
  }

  onAdultsPlus = () => {
    this.setState(prevState => ({
      adults: prevState.adults + 1,
    }))
  }

  onAdultsMinus = () => {
    const {adults} = this.state
    if (adults <= 1) {
      this.setState({
        adults: 1,
      })
    } else {
      this.setState(prevState => ({
        adults: prevState.adults - 1,
      }))
    }
  }

  onChildrenPlus = () => {
    this.setState(prevState => ({
      childrens: prevState.childrens + 1,
    }))
  }

  onChildrenMinus = () => {
    const {childrens} = this.state
    if (childrens === 0) {
      this.setState({
        childrens: 0,
      })
    } else {
      this.setState(prevState => ({
        childrens: prevState.childrens - 1,
      }))
    }
  }

  onInfantsPlus = () => {
    this.setState(prevState => ({
      infants: prevState.infants + 1,
    }))
  }

  onInfantsMinus = () => {
    const {infants} = this.state
    if (infants <= 0) {
      this.setState({
        infants: 0,
      })
    } else {
      this.setState(prevState => ({
        infants: prevState.infants - 1,
      }))
    }
  }

  onCheckTravel = event => {
    if (event.target.checked) {
      this.setState({
        needTravel: true,
      })
    }
  }

  onChangeTravel = event => {
    this.setState({
      activeTravel: event.target.value,
    })
  }

  renderYourDetailsForm = () => {
    const {username, startLocation, endLocation, isFilled} = this.state
    const errorInputClass = isFilled === false ? 'bookInputIconContError' : ''
    const nameFilled = isFilled === false ? 'Enter your name' : ''
    const startLocationFilled =
      isFilled === false ? 'Enter your start location' : ''
    const endLocationFilled =
      isFilled === false ? 'Enter your end location' : ''

    return (
      <>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Your Details</h1>
          <p className="bookTripLgPara">Enter your name and location details</p>
          <div className="detailsFormLg">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Name
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter your name"
                  id="name"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeName}
                  value={username}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{nameFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start location
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter start location"
                  id="start"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeStartLocation}
                  value={startLocation}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{startLocationFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End location
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter end location"
                  id="end"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeEndLocation}
                  value={endLocation}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{endLocationFilled}</p>
            </div>
            <button
              onClick={this.onYourDetailsNext}
              type="button"
              className="bookLgNextBtn"
            >
              Next
            </button>
          </div>
        </div>

        <div className="detailsCont">
          <h1 className="detailsHead">Your Details</h1>
          <p className="detailsPara">Enter your name and location details</p>
          <div className="detailsForm">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Name
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter your name"
                  id="name"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeName}
                  value={username}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{nameFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start location
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter start location"
                  id="start"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeStartLocation}
                  value={startLocation}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{startLocationFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End location
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="Enter end location"
                  id="end"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeEndLocation}
                  value={endLocation}
                />
                {isFilled === false ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              <p className="bookErrorMsg">{endLocationFilled}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={this.onYourDetailsNext}
            className="bookNextBtn"
          >
            Next
          </button>
        </div>
      </>
    )
  }

  onYourDetailsNext = () => {
    const {username, startLocation, endLocation} = this.state
    if (startLocation === '' || username === '' || endLocation === '') {
      this.setState({
        isFilled: false,
      })
    } else {
      this.setState({
        activeStepId: stepsList[1].stepId,
      })
    }
  }

  renderDateForm = () => {
    const {isFilled, startDate, endDate, isLessDate} = this.state
    const errorInputClass = isFilled === false ? 'bookInputIconContError' : ''
    const startDateFilled = isFilled === false ? 'Select start date' : ''
    const endDateFilled = isFilled === false ? 'Select end date' : ''

    return (
      <>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Date Selection</h1>
          <p className="bookTripLgPara">Enter your Start and End Date</p>
          <div className="detailsFormLg">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Start Date
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="name"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeStartDate}
                  value={startDate}
                />
              </div>
              <p className="bookErrorMsg">{startDateFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                End Date
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="start"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeEndDate}
                  value={endDate}
                />
              </div>
              <p className="bookErrorMsg">{endDateFilled}</p>
              <p className="bookErrorMsg">{isLessDate}</p>
            </div>
            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onDatePrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onDateNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="detailsCont">
          <h1 className="detailsHead">Date Selection</h1>
          <p className="detailsPara">Select your start and end date.</p>
          <div className="detailsForm">
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start Date
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="start"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeStartDate}
                  value={startDate}
                />
              </div>
              <p className="bookErrorMsg">{startDateFilled}</p>
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End Date
              </label>
              <div className={`bookInputIconCont ${errorInputClass}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="end"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeEndDate}
                  value={endDate}
                />
              </div>
              <p className="bookErrorMsg">{endDateFilled}</p>
              <p className="bookErrorMsg">{isLessDate}</p>
            </div>
          </div>
          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onDatePrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onDateNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </>
    )
  }

  onDateNext = () => {
    const {startDate, endDate} = this.state
    if (startDate === '' || endDate === '' || startDate > endDate) {
      this.setState({
        isFilled: false,
        isLessDate: 'The end date cannot be less than the start date',
      })
    } else {
      this.setState({
        activeStepId: stepsList[2].stepId,
      })
    }
  }

  onDatePrev = () => {
    this.setState({
      activeStepId: stepsList[0].stepId,
    })
  }

  renderGuestsForm = () => {
    const {adults, childrens, infants} = this.state
    return (
      <>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Guests</h1>
          <p className="bookTripLgPara">Select Your Guests</p>
          <div className="detailsFormLg">
            <ul className="guestsUl">
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Adults</p>
                  <p className="guestPara">Age 13 or above</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onAdultsMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{adults}</p>
                  <button
                    type="button"
                    onClick={this.onAdultsPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Children</p>
                  <p className="guestPara">Age 2-12</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onChildrenMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{childrens}</p>
                  <button
                    type="button"
                    onClick={this.onChildrenPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Infants</p>
                  <p className="guestPara">Age under 2</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onInfantsMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{infants}</p>
                  <button
                    type="button"
                    onClick={this.onInfantsPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
            </ul>
            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onGuestsPrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onGuestsNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="detailsCont">
          <h1 className="detailsHead">Guests</h1>
          <p className="detailsPara">Select Your Guests.</p>
          <ul className="guestsUl">
            <li className="guestLi">
              <div className="guestTextCont">
                <h1 className="guestHead">Adults</h1>
                <p className="guestPara">Age 13 or above</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onAdultsMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{adults}</p>
                <button
                  type="button"
                  onClick={this.onAdultsPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
            <li className="guestLi">
              <div className="guestTextCont">
                <h1 className="guestHead">Children</h1>
                <p className="guestPara">Age 2-12</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onChildrenMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{childrens}</p>
                <button
                  type="button"
                  onClick={this.onChildrenPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
            <li className="guestLi">
              <div className="guestTextCont">
                <h1 className="guestHead">Infants</h1>
                <p className="guestPara">Age under 2</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onInfantsMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{infants}</p>
                <button
                  type="button"
                  onClick={this.onInfantsPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
          </ul>

          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onGuestsPrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onGuestsNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </>
    )
  }

  onGuestsNext = () => {
    this.setState({
      activeStepId: stepsList[3].stepId,
    })
  }

  onGuestsPrev = () => {
    this.setState({
      activeStepId: stepsList[1].stepId,
    })
  }

  renderTravelForm = () => {
    const {needTravel, activeTravel} = this.state
    return (
      <>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Travel Assistance</h1>
          <p className="bookTripLgPara">Select your travel assistance</p>
          <div className="detailsFormLg">
            <div className="travelInputCont">
              <input id="check" onChange={this.onCheckTravel} type="checkbox" />
              <label htmlFor="check" className="travelLabel">
                Travel Assistance
              </label>
            </div>
            <h1 className="travelHead">Travel Assistance</h1>
            {needTravel && (
              <select
                value={activeTravel}
                onChange={this.onChangeTravel}
                className="travelInputBox"
              >
                {travelAssistanceList.map(each => (
                  <option value={each.value} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            )}

            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onTravelPrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onTravelNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="detailsCont">
          <h1 className="detailsHead">Travel Assistance</h1>
          <p className="detailsPara">Select your Travel Assistance.</p>
          <div className="detailsForm">
            <div className="travelInputCont">
              <input id="check" onChange={this.onCheckTravel} type="checkbox" />
              <label htmlFor="check" className="travelLabel">
                Travel Assistance
              </label>
            </div>
            <h1 className="travelHead">Travel Assistance</h1>
            {needTravel && (
              <select
                value={activeTravel}
                onChange={this.onChangeTravel}
                className="travelInputBox"
              >
                {travelAssistanceList.map(each => (
                  <option value={each.displayText} key={each.value}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onTravelPrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onTravelNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </>
    )
  }

  onTravelNext = () => {
    this.setState({activeStepId: stepsList[4].stepId})
  }

  onTravelPrev = () => {
    this.setState({
      activeStepId: stepsList[2].stepId,
    })
  }

  renderConfirmForm = () => {
    const {
      username,
      startLocation,
      endLocation,
      startDate,
      endDate,
      adults,
      childrens,
      infants,
      activeTravel,
    } = this.state

    const tripObj = {
      endLocation,
      startDate,
      endDate,
      id: uuidv4(),
    }

    return (
      <>
        <TripContext.Consumer>
          {value => {
            const {onAddTrip} = value

            const onConfirmNext = () => {
              onAddTrip(tripObj)
              this.setState(prevState => ({
                isConfirmed: !prevState.isConfirmed,
              }))
              console.log('confirm')
            }
            return (
              <>
                <div className="bookTripLgDetailsCont">
                  <h1 className="bookTripLgHead">Confirmation</h1>
                  <p className="bookTripLgPara">Confirm Your Details</p>
                  <div className="detailsFormLg">
                    <ul className="confirmUl">
                      <li className="confirmLi">
                        <h1 className="confirmHead">Name:</h1>
                        <p className="confirmPara">{username}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Start location:</h1>
                        <p className="confirmPara">{startLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">End location:</h1>
                        <p className="confirmPara">{endLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Start Date:</h1>
                        <p className="confirmPara">{startDate}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">End Date:</h1>
                        <p className="confirmPara">{endDate}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Guests:</h1>
                        <p className="confirmPara">
                          {adults + childrens + infants}
                        </p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Travel Assistance:</h1>
                        <p className="confirmPara">{activeTravel}</p>
                      </li>
                    </ul>
                    <div className="bookBtnsCont">
                      <button
                        onClick={this.onConfirmPrev}
                        type="button"
                        className="bookPrevBtn"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={onConfirmNext}
                        className="bookNextBtn"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="detailsCont">
                  <h1 className="detailsHead">Confirmation</h1>
                  <p className="detailsPara">Confirm your details</p>
                  <div className="detailsForm">
                    <ul className="confirmUl">
                      <li className="confirmLi">
                        <h1 className="confirmHead">Name:</h1>
                        <p className="confirmPara">{username}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Start location:</h1>
                        <p className="confirmPara">{startLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">End location:</h1>
                        <p className="confirmPara">{endLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Start Date:</h1>
                        <p className="confirmPara">{startDate}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">End Date:</h1>
                        <p className="confirmPara">{endDate}</p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Guests:</h1>
                        <p className="confirmPara">
                          {adults + childrens + infants}
                        </p>
                      </li>
                      <li className="confirmLi">
                        <h1 className="confirmHead">Travel Assistance:</h1>
                        <p className="confirmPara">{activeTravel}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bookBtnsCont">
                    <button
                      type="button"
                      onClick={this.onTravelPrev}
                      className="bookPrevBtn"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={this.onConfirmNext}
                      className="bookNextBtn"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )
          }}
        </TripContext.Consumer>
      </>
    )
  }

  onConfirmPrev = () => {
    this.setState({
      activeStepId: stepsList[3].stepId,
    })
  }

  renderSuccess = () => (
    <>
      <div className="bookTripLgDetailsCont">
        <div className="detailsFormLg bookedCont">
          <img
            className="bookedImg"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
            alt="success"
          />
          <h1 className="emptyHead">Awesome!</h1>
          <p className="emptyPara">When your booking has been confirmed.</p>
          <button
            onClick={this.succcessNewTrip}
            type="button"
            className="emptyBtn"
          >
            Book a New Trip
          </button>
        </div>
      </div>
      <div className="detailsForm bookedCont">
        <img
          className="bookedImg"
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
          alt="success"
        />
        <h1 className="emptyHead">Awesome!</h1>
        <p className="emptyPara">When your booking has been confirmed.</p>
        <button
          onClick={this.succcessNewTrip}
          type="button"
          className="emptyBtn"
        >
          Book a New Trip
        </button>
      </div>
    </>
  )

  renderAllForms = () => {
    const {activeStepId} = this.state

    switch (activeStepId) {
      case stepsList[0].stepId:
        return this.renderYourDetailsForm()
      case stepsList[1].stepId:
        return this.renderDateForm()
      case stepsList[2].stepId:
        return this.renderGuestsForm()
      case stepsList[3].stepId:
        return this.renderTravelForm()
      case stepsList[4].stepId:
        return this.renderConfirmForm()

      default:
        return null
    }
  }

  getBasicForm = () => {
    const {activeStepId, isConfirmed} = this.state
    return (
      <>
        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              {stepsList.map((eachLgStep, index) => (
                <li key={`${eachLgStep.stepId}`} className="bookTripSidebarLi">
                  <p
                    className={`numIcon ${
                      activeStepId === eachLgStep.stepId ? 'numIconActive' : ''
                    }`}
                  >
                    {index + 1}
                  </p>
                  {/* <img
                  className='tickIcon'
                  src='https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png'
                  alt='tick'
                  /> */}
                  <p
                    className={`numPara ${
                      activeStepId === eachLgStep.stepId ? 'numParaActive' : ''
                    }`}
                  >
                    {eachLgStep.displayText}
                  </p>
                </li>
              ))}
            </ul>
            {isConfirmed ? this.renderSuccess() : this.renderAllForms()}
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            {stepsList.map(eachSmStep => (
              <li
                key={`${eachSmStep.stepId}`}
                className={`smTabLi ${
                  activeStepId === eachSmStep.stepId ? 'smTabLiActive' : ''
                }`}
              >
                {' '}
              </li>
            ))}
          </ul>
          {isConfirmed ? this.renderSuccess() : this.renderAllForms()}
        </div>
      </>
    )
  }

  succcessNewTrip = () => {
    this.getBasicForm()
  }

  render() {
    return (
      <div>
        <Header />
        {this.getBasicForm()}
      </div>
    )
  }
}
export default BookANewTrip
