import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../../App.css';

class Activator extends Component {
    constructor() {
        super()
this.state={time:new Date()}
    }

    currentTime()
    {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount()
    {
setInterval(()=>this.currentTime(),1000)
}
  
    render() {
        return (
            <div className="activator">
                <Button inverted color='yellow' size='massive'>Activate</Button>
            </div>
        )
    }
}

export default Activator