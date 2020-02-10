import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import { Meteor } from 'meteor/meteor'
import { useHistory } from 'react-router-dom';

const App = () => {

  let history = useHistory()

  const logout = (e) => {
    e.preventDefault()
    Meteor.logout(error => {
      if (error) {
        console.log("error logging user out")
      } else {
        history.push("/login")
      }
    })
  }
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <h3>This is a protected route</h3>
      <button onClick={logout}>Logout</button>
      <Hello />
      <Info />
    </div>
  )
};

export default App;
