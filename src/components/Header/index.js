// -------------- Header.js --------------
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="headerLg">
        <Link to="/" className="link">
          <h1 className="headerLogo">Travel Trip </h1>
        </Link>
        <ul className="optionsUl">
          <li className="optionLi">
            <Link className="link optionLi" to="/">
              Home
            </Link>
          </li>
          <li className="optionLi">
            <Link className="link optionLi" to="/my-trips">
              My Trips
            </Link>
          </li>
        </ul>
        <button onClick={onClickLogout} type="button" className="logoutBtn">
          Logout
        </button>
      </nav>
      {/* Space */}
      <nav className="headerSm">
        <button type="button" className="homeBtn">
          <Link className="link" to="/">
            <img
              className="homeIcon"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428016/Icon_bh1cxc.svg"
              alt="home"
            />
          </Link>
        </button>
        <button type="button" className="homeBtn">
          <Link className="link" to="/my-trips">
            <img
              className="homeIcon"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428124/Vector_xtni4q.svg"
              alt="my trips"
            />
          </Link>
        </button>
        <button onClick={onClickLogout} type="button" className="homeBtn">
          <img
            className="homeIcon"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428690/logout_wwyuyd.svg"
            alt="logout"
          />
        </button>
      </nav>
    </>
  )
}
export default withRouter(Header)
