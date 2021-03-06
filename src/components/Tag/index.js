import './Tag.css'
import React from 'react'

const Tag = props =>
    <div className={`Tag ${props.isSelected ? 'selected red-bg' : ''}`}>
        {props.name}
        {props.count ?
            '|' + props.count
            : null
        }
    </div>

export default Tag