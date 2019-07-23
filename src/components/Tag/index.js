import './Tag.css'
import JiggleDiv from '../JiggleDiv'
import React from 'react'

const Tag = props =>
    <div className='Tag'>
        {props.tagName}
    </div>

export default Tag