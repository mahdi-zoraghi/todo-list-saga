import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { GoogleLogin, GoogleLogout } from "react-google-login"

import { userLogIn, userLogOut } from "../store/actions"

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`

const Profile = styled.span`
  margin-left: 15px;
`
const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`

const Navigation = () => {
  const CLIENT_ID =
    "414097508394-3kt3q0l90kvnrbp9spe3nu88rvoa1oft.apps.googleusercontent.com"
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const loginSuccess = res => {
    dispatch(userLogIn(res.profileObj))
  }

  const logoutSuccess = () => {
    dispatch(userLogOut())
  }

  return (
    <NavigationBar>
      <Link className="btn btn-primary" to="/">
        To-Do List
      </Link>
      <Link className="btn btn-secondary" to="/new-item">
        + Add New
      </Link>
      {!user.googleId && (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={err => alert(err)}
          render={renderProps => (
            <Button onClick={renderProps.onClick}>Login</Button>
          )}
        />
      )}
      {user.googleId && (
        <>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
            onFailure={err => alert("log out failure", err)}
            render={renderProps => (
              <Button onClick={renderProps.onClick}>Log Out</Button>
            )}
          ></GoogleLogout>
          <Profile>
            <ProfilePicture src={user.imageUrl} />
            {user.email}
          </Profile>
        </>
      )}
    </NavigationBar>
  )
}

export default Navigation
