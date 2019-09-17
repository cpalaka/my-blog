import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Hoverable from '../utils/Hoverable'
import HomeIcon from '../../../images/home.svg'
import BlogIcon from '../../../images/blog.svg'
import UserIcon from '../../../images/user.svg'
import './Sidebar.css'

const Sidebar = (props) => {
    console.log(props)
    const path = props.location.pathname
    const [aboutMenuOpened, setAboutMenuOpened] = useState(false)
    const [blogMenuOpened, setBlogMenuOpened] = useState(false)

    return (
        <div className='sitelinks'>

            <Hoverable>
                {hovered =>
                    <div className={hovered || path === '/about' ? 'red-underline about' : 'about'}>
                        <img src={UserIcon} alt='user icon' />
                    </div>
                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <Link to='/' className={hovered || path === '/' ? 'red-underline home' : 'home'}>
                        <img src={HomeIcon} alt='home icon' />
                    </Link>

                }
            </Hoverable>
            <Hoverable>
                {hovered =>
                    <>
                    {blogMenuOpened ?
                        <div className={'blog-submenu show'}>
                            <Link to='/blog' style={{ textDecoration: 'none' }}>All</Link>
                            <Link to='/blog/reviews' style={{ textDecoration: 'none' }}>Reviews</Link>
                            <Link to='/blog/tech' style={{ textDecoration: 'none' }}>Tech</Link>
                            <Link to='/blog/misc' style={{ textDecoration: 'none' }}>Misc</Link>
                        </div> : <div className={'blog-submenu hide'}></div>
                    }
                        <div onClick={() => setBlogMenuOpened(t => !t)} className='blog'>
                            <img src={BlogIcon} alt='blog icon' className={hovered || path === '/blog' ? 'red-underline' : ''} />
                        </div>
                    </>
                }
            </Hoverable>
        </div>
    )
}

export default withRouter(Sidebar)