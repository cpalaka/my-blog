import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './Sidebar.css'

const Sidebar = (props) => {
    console.log(props)
    return (
        <div className="side-bar">
            <div className="nav-square">
                <div>SITE TITLE</div>
                <Link to="/about" >ABOUT ME</Link>
            </div>

        </div>
    )
}

export default withRouter(Sidebar)