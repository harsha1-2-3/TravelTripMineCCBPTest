import React from 'react'

const TripContext = React.createContext({
  tripsList: [],
  onClickCancel: () => {},
})
export default TripContext
