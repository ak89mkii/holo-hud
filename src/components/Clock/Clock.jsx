import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import '../../App.css';
import '../../img/mom.jpg';
import Mom from '../../img/mom.jpg'

class Clock extends Component {
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
            <div>
                <h1 className="title">HOLO-MOM 9000</h1>
                <br></br>
                <div className="clock">
                    {this.state.time.toLocaleTimeString()}
                </div>
                <div className="frame">
                    <img className="photo" src={Mom} />
                    {/* <img src="https://globalwhitepeoplehome.files.wordpress.com/2019/11/magnetic-loop-energy-field-poles.gif" /> */}
                </div>
            </div>
        )
    }
}


export default Clock