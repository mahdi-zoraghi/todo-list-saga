import { Component } from "react"
import { GoogleLogin, GoogleLogout } from "react-google-login"

const CLIENT_ID =
  "414097508394-3kt3q0l90kvnrbp9spe3nu88rvoa1oft.apps.googleusercontent.com"

class GoogleBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogined: false,
      accessToken: "",
    }
  }

  login = res => {
    if (res.accessToken) {
      this.setState(state => ({
        isLogined: true,
        accessToken: res.accessToken,
      }))
    }
  }

  logout = res => {
    this.setState(state => ({
      isLogined: false,
      accessToken: "",
    }))
  }

  handelLoginFailure = () => {
    alert("Failed to Log in")
  }

  handelLogoutFailure = () => {
    alert("Failed to log out")
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handelLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handelLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
        {this.state.accessToken ? (
          <h5>
            Your Access Token: <br />
            <br /> {this.state.accessToken}
          </h5>
        ) : null}
      </div>
    )
  }
}

export default GoogleBtn
