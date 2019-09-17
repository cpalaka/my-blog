import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Hoverable from '../utils/Hoverable'
import HomeIcon from '../../../images/home.svg'
import BlogIcon from '../../../images/blog.svg'
import UserIcon from '../../../images/user.svg'
import './Sidebar.css'

const Sidebar = (props) => {
    console.log(props)
    return (
        <div className='sitelinks'>
            
            <Hoverable>
                {hovered =>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <img src={UserIcon} alt='user icon' />
                    </Link>
                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src={HomeIcon} alt='home icon' />
                    </Link>

                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <Link to='/blog' style={{ textDecoration: 'none' }}>
                        <img src={BlogIcon} alt='blog icon' />
                    </Link>
                }
            </Hoverable>
        </div>
    )
}

export default withRouter(Sidebar)