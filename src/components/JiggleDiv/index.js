import React from 'react'
import './JiggleDiv.css'

class JiggleDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: 0,
            left: 0,
            jiggAmount: 10
        }
    }
    

    handleMouseMove = (ev) => {
        const relativeX = ev.clientX - ev.target.getBoundingClientRect().left
        const relativeY = ev.clientY - ev.target.getBoundingClientRect().top
        const relativeCenterX = ev.target.getBoundingClientRect().width/2
        const relativeCenterY = ev.target.getBoundingClientRect().height/2

        this.setState({top: (relativeY-relativeCenterY)/this.state.jiggAmount, left: (relativeX-relativeCenterX)/this.state.jiggAmount})
    }

    render() {
        return (
            <div className="jiggle-container" onMouseMove={this.handleMouseMove} onMouseLeave={()=>this.setState({top:0,left:0})}>
                <div className="jiggle-div" style={{ top: this.state.top, left: this.state.left}}>
                    {this.props.children}
                </div>
                <div className="overlay-div"/>
            </div>
        )
    }
}

export default JiggleDiv