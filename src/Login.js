import React from 'react';
import fire from './config/fire';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        alert('Successfully Signed Up');
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        alert('Successfully Logged In');
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <label className ="label">Email</label>
          <input className="input is-info" id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input is-info" id="password" placeholder="Enter Password.." type="password"/>
        </div>
        <button className="button is-info" style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button className="button is-primary" style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;