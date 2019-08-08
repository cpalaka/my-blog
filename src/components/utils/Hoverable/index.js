import React, { useState } from 'react'

// HOC which manages 'hovered' state via mouseover + mouseout
const Hoverable = (props) => {
    const [s, isHovered] = useState(false)
    return (
        <div onMouseOver={()=>isHovered(true)} onMouseOut={()=>isHovered(false)} >
            {props.children(s)}
        </div>
    )
}

export default Hoverable