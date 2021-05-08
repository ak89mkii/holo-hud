import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// import Title from './components/Title/Title.jsx'
import Clock from './components/Clock/Clock.jsx'
import Activator from './components/Activator/Activator.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="screen">
        {/* <Title /> */}
        <Clock />
        <Activator />
      </div>
    )
  }
}

export default App;
