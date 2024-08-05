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
        <h1> Booking Trip </h1>
      </>
    )
  }
}
export default BookANewTrip
