// -------------- App.js --------------
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import TripContext from './context/TripContext'
import './App.css'

const tripsListInitial = [
  {
    cityName: 'New York',
    startDate: '2024-10-10',
    endDate: '2030-10-10',
    id: 1,
  },
  {
    cityName: 'New Zealand',
    startDate: '2030-10-10',
    endDate: '2060-10-10',
    id: 2,
  },
  {
    cityName: 'Japan',
    startDate: '2060-10-10',
    endDate: '2090-10-10',
    id: 3,
  },
]
class App extends Component {
  state = {
    tripsList: tripsListInitial,
  }

  onClickCancel = id => {
    const {tripsList} = this.state
    const filteredList = tripsList.filter(each => each.id !== id)
    this.setState({
      tripsList: filteredList,
    })
  }

  render() {
    const {tripsList} = this.state
    return (
      <TripContext.Provider
        value={{
          onClickCancel: this.onClickCancel,
          tripsList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookANewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </TripContext.Provider>
    )
  }
}
export default App
