import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUserId, updateUserName } from "../../redux/reducer"


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      loginUserName: "",
      loginPassword: "",
      loginError: false,
      loginErrorMessage: "Username or password is incorrect. Please try again."
    }
  }

  handleFormInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      loginError: false
    })
  }

  handleLoginFormSubmit = async (e) => {
    e.preventDefault()
    const { loginUserName, loginPassword } = this.state
    try {
      const res = await axios.post('/auth/login', { loginUserName, loginPassword })
      this.props.updateUserName(loginUserName)
      this.props.updateUserId(res.data.user_id)
      this.props.history.push('/info')
    } catch (err) {
      this.setState({
        loginUserName: "",
        loginPassword: "",
        loginError: true
      })

    }
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleLoginFormSubmit}>
          <input type='text'
            name="loginUserName"
            placeholder="username"
            value={this.state.loginUserName}
            onChange={this.handleFormInputUpdate} />

          <input type="text"
            name="loginPassword"
            placeholder="password"
            value={this.state.loginPassword}
            onChange={this.handleFormInputUpdate} />

          <button >Login</button>
        </form>
        {this.state.loginError &&
          <h3>{this.state.loginErrorMessage}</h3>}
      </>
    )
  }

}

const mapDispatchToProps = {
  updateUserId,
  updateUserName
}

export default connect(null,  mapDispatchToProps)(withRouter(LoginForm))