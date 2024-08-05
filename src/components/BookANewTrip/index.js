// -------------- BookANewTrip.js --------------
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import TripContext from '../../context/TripContext'
import './index.css'

class BookANewTrip extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <div className="detailsFormLg bookedCont">
                <img
                  className="bookedImg"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="empty"
                />
                <h1 className="emptyHead">Awesome!</h1>
                <p className="emptyPara">
                  When your booking has been confirmed.
                </p>
                <button className="emptyBtn">Book a New Trip</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
          </ul>
          <div className="detailsForm bookedCont">
            <img
              className="bookedImg"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
              alt="empty"
            />
            <h1 className="emptyHead">Awesome!</h1>
            <p className="emptyPara">When your booking has been confirmed.</p>
            <button className="emptyBtn">Book a New Trip</button>
          </div>
        </div>

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon numIconActive">5</p>
                <p className="numPara numParaActive">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <h1 className="bookTripLgHead">Confirmation</h1>
              <p className="bookTripLgPara">Confirm Your Details</p>
              <div className="detailsFormLg">
                <ul className="confirmUl">
                  <li className="confirmLi">
                    <h1 className="confirmHead">Name:</h1>
                    <p className="confirmPara">Harsha</p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">Start location:</h1>
                    <p className="confirmPara">Proddatur</p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">End location:</h1>
                    <p className="confirmPara">New York</p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">Start Date:</h1>
                    <p className="confirmPara">2024-10-10 </p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">End Date:</h1>
                    <p className="confirmPara">2025-12-12</p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">Guests:</h1>
                    <p className="confirmPara">6</p>
                  </li>
                  <li className="confirmLi">
                    <h1 className="confirmHead">Travel Assistance:</h1>
                    <p className="confirmPara">Car</p>
                  </li>
                </ul>
                <div className="bookBtnsCont">
                  <button className="bookPrevBtn">Previous</button>
                  <button className="bookNextBtn">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi smTabLiActive" />
          </ul>
          <div className="detailsCont">
            <h1 className="detailsHead">Confirmation</h1>
            <p className="detailsPara">Confirm your details</p>
            <div className="detailsForm">
              <ul className="confirmUl">
                <li className="confirmLi">
                  <h1 className="confirmHead">Name:</h1>
                  <p className="confirmPara">Harsha</p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">Start location:</h1>
                  <p className="confirmPara">Proddatur</p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">End location:</h1>
                  <p className="confirmPara">New York</p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">Start Date:</h1>
                  <p className="confirmPara">2024-10-10 </p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">End Date:</h1>
                  <p className="confirmPara">2025-12-12</p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">Guests:</h1>
                  <p className="confirmPara">6</p>
                </li>
                <li className="confirmLi">
                  <h1 className="confirmHead">Travel Assistance:</h1>
                  <p className="confirmPara">Car</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bookBtnsCont">
            <button className="bookPrevBtn">Previous</button>
            <button className="bookNextBtn">Next</button>
          </div>
        </div>

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon numIconActive">4</p>
                <p className="numPara numParaActive">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">5</p>
                <p className="numPara">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <h1 className="bookTripLgHead">Travel Assistance</h1>
              <p className="bookTripLgPara">Select your travel assistance</p>
              <div className="detailsFormLg">
                <div className="travelInputCont">
                  <input id="check" type="checkbox" />
                  <label htmlFor="check" className="travelLabel">
                    Travel Assistance
                  </label>
                </div>
                <h1 className="travelHead">Travel Assistance</h1>
                <select className="travelInputBox">
                  <option>Fligh</option>
                  <option>Car</option>
                  <option>Bus</option>
                </select>
                <div className="bookBtnsCont">
                  <button className="bookPrevBtn">Previous</button>
                  <button className="bookNextBtn">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi smTabLiActive" />
            <li className="smTabLi" />
          </ul>
          <div className="detailsCont">
            <h1 className="detailsHead">Travel Assistance</h1>
            <p className="detailsPara">Select your Travel Assistance.</p>
            <div className="detailsForm">
              <div className="travelInputCont">
                <input id="check" type="checkbox" />
                <label htmlFor="check" className="travelLabel">
                  Travel Assistance
                </label>
              </div>
              <h1 className="travelHead">Travel Assistance</h1>
              <select className="travelInputBox">
                <option>Fligh</option>
                <option>Car</option>
                <option>Bus</option>
              </select>
            </div>
          </div>
          <div className="bookBtnsCont">
            <button className="bookPrevBtn">Previous</button>
            <button className="bookNextBtn">Next</button>
          </div>
        </div>

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon numIconActive">3</p>
                <p className="numPara numParaActive">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">4</p>
                <p className="numPara">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">5</p>
                <p className="numPara">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <h1 className="bookTripLgHead">Guests</h1>
              <p className="bookTripLgPara">Select Your Guests</p>
              <form className="detailsFormLg">
                <ul className="guestsUl">
                  <li className="guestLi">
                    <div className="guestTextCont">
                      <h1 className="guestHead">Adults</h1>
                      <p className="guestPara">Age 13 or above</p>
                    </div>
                    <div className="guestsCountCont">
                      <button className="mpBtn">-</button>
                      <p className="guestCount">0</p>
                      <button className="mpBtn">+</button>
                    </div>
                  </li>
                </ul>
                <div className="bookBtnsCont">
                  <button className="bookPrevBtn">Previous</button>
                  <button className="bookNextBtn">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi smTabLiActive" />
            <li className="smTabLi" />
            <li className="smTabLi" />
          </ul>
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
                  <button className="mpBtn">-</button>
                  <p className="guestCount">0</p>
                  <button className="mpBtn">+</button>
                </div>
              </li>
            </ul>

            <div className="bookBtnsCont">
              <button className="bookPrevBtn">Previous</button>
              <button className="bookNextBtn">Next</button>
            </div>
          </div>
        </div>

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <img
                  className="tickIcon"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434328/tick-circle_o9y1rt.png"
                  alt="tick"
                />
                <p className="numPara">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon numIconActive">2</p>
                <p className="numPara numParaActive">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">3</p>
                <p className="numPara">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">4</p>
                <p className="numPara">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">5</p>
                <p className="numPara">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <h1 className="bookTripLgHead">Date Selection</h1>
              <p className="bookTripLgPara">Enter your Start and End Date</p>
              <form className="detailsFormLg">
                <div className="bookInputCont">
                  <label htmlFor="name" className="bookInputLabel">
                    Start Date
                  </label>
                  <div className="bookInputIconCont bookInputIconContError">
                    <input
                      placeholder="dd/mm/yyyy"
                      id="name"
                      className="bookInputBox"
                      type="date"
                    />
                  </div>
                  <p className="bookErrorMsg">Select start date</p>
                </div>
                <div className="bookInputCont">
                  <label htmlFor="start" className="bookInputLabel">
                    End Date
                  </label>
                  <div className="bookInputIconCont">
                    <input
                      placeholder="dd/mm/yyyy"
                      id="start"
                      className="bookInputBox"
                      type="date"
                    />
                  </div>
                  <p className="bookErrorMsg">Select end date</p>
                  <p className="bookErrorMsg">
                    End date cannot be less than start date
                  </p>
                </div>
                <div className="bookBtnsCont">
                  <button className="bookPrevBtn">Previous</button>
                  <button className="bookNextBtn">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi" />
            <li className="smTabLi smTabLiActive" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
          </ul>
          <div className="detailsCont">
            <h1 className="detailsHead">Date Selection</h1>
            <p className="detailsPara">Select your start and end date.</p>
            <form className="detailsForm">
              <div className="bookInputCont">
                <label htmlFor="start" className="bookInputLabel">
                  Start Date
                </label>
                <div className="bookInputIconCont bookInputIconContError">
                  <input
                    placeholder="dd/mm/yyyy"
                    id="start"
                    className="bookInputBox"
                    type="date"
                  />
                </div>
                <p className="bookErrorMsg">Select start date</p>
              </div>
              <div className="bookInputCont">
                <label htmlFor="end" className="bookInputLabel">
                  End Date
                </label>
                <div className="bookInputIconCont">
                  <input
                    placeholder="dd/mm/yyyy"
                    id="end"
                    className="bookInputBox"
                    type="date"
                  />
                </div>
                <p className="bookErrorMsg">Select end date</p>
                <p className="bookErrorMsg">
                  End date cannot be less than start date
                </p>
              </div>
            </form>
            <div className="bookBtnsCont">
              <button className="bookPrevBtn">Previous</button>
              <button className="bookNextBtn">Next</button>
            </div>
          </div>
        </div>

        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              <li className="bookTripSidebarLi">
                <p className="numIcon numIconActive">1</p>
                <p className="numPara numParaActive">Your Details</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">2</p>
                <p className="numPara">Date Section</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">3</p>
                <p className="numPara">Guests</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">4</p>
                <p className="numPara">Travel Assistance</p>
              </li>
              <li className="bookTripSidebarLi">
                <p className="numIcon">5</p>
                <p className="numPara">Confirmation</p>
              </li>
            </ul>
            <div className="bookTripLgDetailsCont">
              <h1 className="bookTripLgHead">Your Details</h1>
              <p className="bookTripLgPara">
                Enter your name and location details
              </p>
              <form className="detailsFormLg">
                <div className="bookInputCont">
                  <label htmlFor="name" className="bookInputLabel">
                    Name
                  </label>
                  <div className="bookInputIconCont bookInputIconContError">
                    <input
                      placeholder="Enter your name"
                      id="name"
                      className="bookInputBox"
                      type="text"
                    />
                    <img
                      className="inputErrorIcon"
                      src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                      alt="input error"
                    />
                  </div>
                  <p className="bookErrorMsg">Enter your name</p>
                </div>
                <div className="bookInputCont">
                  <label htmlFor="start" className="bookInputLabel">
                    Start location
                  </label>
                  <div className="bookInputIconCont">
                    <input
                      placeholder="Enter start location"
                      id="start"
                      className="bookInputBox"
                      type="text"
                    />
                    <img
                      className="inputErrorIcon"
                      src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                      alt="input error"
                    />
                  </div>
                  <p className="bookErrorMsg">Enter your start location</p>
                </div>
                <div className="bookInputCont">
                  <label htmlFor="end" className="bookInputLabel">
                    End location
                  </label>
                  <div className="bookInputIconCont">
                    <input
                      placeholder="Enter end location"
                      id="end"
                      className="bookInputBox"
                      type="text"
                    />
                    <img
                      className="inputErrorIcon"
                      src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                      alt="input error"
                    />
                  </div>
                  <p className="bookErrorMsg">Enter your end location</p>
                </div>
                <button className="bookLgNextBtn">Next</button>
              </form>
            </div>
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            <li className="smTabLi smTabLiActive" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
            <li className="smTabLi" />
          </ul>
          <div className="detailsCont">
            <h1 className="detailsHead">Your Details</h1>
            <p className="detailsPara">Enter your name and location details</p>
            <form className="detailsForm">
              <div className="bookInputCont">
                <label htmlFor="name" className="bookInputLabel">
                  Name
                </label>
                <div className="bookInputIconCont bookInputIconContError">
                  <input
                    placeholder="Enter your name"
                    id="name"
                    className="bookInputBox"
                    type="text"
                  />
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                </div>
                <p className="bookErrorMsg">Enter your name</p>
              </div>
              <div className="bookInputCont">
                <label htmlFor="start" className="bookInputLabel">
                  Start location
                </label>
                <div className="bookInputIconCont">
                  <input
                    placeholder="Enter start location"
                    id="start"
                    className="bookInputBox"
                    type="text"
                  />
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                </div>
                <p className="bookErrorMsg">Enter your start location</p>
              </div>
              <div className="bookInputCont">
                <label htmlFor="end" className="bookInputLabel">
                  End location
                </label>
                <div className="bookInputIconCont">
                  <input
                    placeholder="Enter end location"
                    id="end"
                    className="bookInputBox"
                    type="text"
                  />
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                </div>
                <p className="bookErrorMsg">Enter your end location</p>
              </div>
            </form>
            <button className="bookNextBtn">Next</button>
          </div>
        </div>
      </>
    )
  }
}
export default BookANewTrip
