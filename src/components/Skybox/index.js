import React from 'react'
import './Skybox.css'

const Skybox = props => {
    return (
        <PlaneComponent 
            perspective="100px"
            width="100%"
            height="100%"
        >
            <div className="box" />
        </PlaneComponent>
    )
}

const PlaneComponent = props => {

    let planeStyle = {
        width: props.width,
        height: props.height,
        perspective: props.perspective,
        transform: 'rotateY(22deg)'
    }
    return (
        <div style={planeStyle} >
            {props.children}
        </div>
    )
}

export default Skybox