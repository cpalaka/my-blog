import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import axios from 'axios'

const AboutPage = (props) => {
    let result = null
    axios.get('https://frozen-dusk-92791.herokuapp.com/test?api=api/1/bookmarks/list')
        .then( res => {
            console.log(res)
            result = res
        })
    return (
        <div className="">
            <h1>About page</h1><Link to='/blog'>To Blog</Link>
            { result !== null ? 
                result
            : null}
        </div>
    )
}

export default AboutPage