import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../../App.css';

// Revisit: Need to figure out "fetch" for Flask backend.
class Activator extends Component {
    state = {
        
    }

    componentDidMount() {
        fetch('/activate')
          .then(response => {
            console.log(response.text())
            this.setState({ snippets: response.data })
          })
          .catch(error=>{
            console.log(error)
          })
      }

    render() {
        return (
            <div className="activator">
                <Button onClick={this.componentDidMount} inverted color='yellow' size='massive'>Activate</Button>
            </div>
        )
    }
}

export default Activator