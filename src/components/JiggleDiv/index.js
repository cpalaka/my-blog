import React from 'react'
import './JiggleDiv.css'

class JiggleDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mousepos: { x: null, y: null},
            top: 0,
            left: 0
        }
    }
    

    handleMouseMove = (ev) => {
        const relativeX = ev.clientX - ev.target.getBoundingClientRect().left
        const relativeY = ev.clientY - ev.target.getBoundingClientRect().top
        const relativeCenterX = ev.target.getBoundingClientRect().width/2
        const relativeCenterY = ev.target.getBoundingClientRect().height/2
        // console.log(ev.target.getBoundingClientRect())


        // console.log(ev.clientX - divLeft, ev.clientY - divTop)
        // console.log('center',relativeCenterX,relativeCenterY)
        // console.log('pos',ev.target.getBoundingClientRect())
        console.log(relativeY-relativeCenterY)
        this.setState({top: (relativeY-relativeCenterY)/5, left: (relativeX-relativeCenterX)/5})
    }

    render() {
        console.log(this.state.mousepos.x)
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