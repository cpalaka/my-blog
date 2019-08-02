import './Tag.css'
import JiggleDiv from '../JiggleDiv'
import React from 'react'

const Tag = props =>
    <div className={`Tag ${props.isSelected ? 'selected' : ''}`}>
        {props.name}
        {props.count ?
            props.count
            : null
        }
    </div>

export default Tag