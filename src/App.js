import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// import Title from './components/Title/Title.jsx'
import Clock from './components/Clock/Clock.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="screen">
        {/* <Title /> */}
        <Clock />
      </div>
    )
  }
}

export default App;
