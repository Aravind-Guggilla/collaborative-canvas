import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    name: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {history} = this.props
    const {name} = this.state 
    history.replace(`/container?name=${name}`)
  }

  render() {
    const {name} = this.state

    return (
      <div className="app-container">
        <form className="login-card" onSubmit={this.onSubmitForm}>
          <h1 className="title">Enter your name</h1>
          <p className="description">
            Enter your name to start Drawing. This will be used to identify
          </p>

          <input
            type="text"
            value={name}
            onChange={this.onChangeName}
            className="input"
            placeholder='Your name (e.g. John Doe)'
          />

          <div className="button-container">
            <button type="submit" className="button">
              Continue
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
