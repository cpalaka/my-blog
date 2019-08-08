import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Hoverable from '../utils/Hoverable'
import './Sidebar.css'

const Sidebar = (props) => {
    console.log(props)
    return (
        <div className='sitelinks'>
            <Hoverable>
                {hovered =>
                    <>
                        <div className={`box ${hovered || props.location.pathname === '/' ? 'hoverable-show' : 'hoverable-hide'}`}></div>
                        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    </>
                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <>
                        <div className={`box ${hovered || props.location.pathname === '/blog'? 'hoverable-show' : 'hoverable-hide'}`}></div>
                        <Link to='/blog' style={{ textDecoration: 'none' }}>Blog</Link>
                    </>
                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <>
                        <div className={`box ${hovered || props.location.pathname === '/about'? 'hoverable-show' : 'hoverable-hide'}`}></div>
                        <Link to='/about' style={{ textDecoration: 'none' }}>Me</Link>
                    </>
                }
            </Hoverable>
        </div>
    )
}

export default withRouter(Sidebar)