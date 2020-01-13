import React, { useRef } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { Transition } from 'react-transition-group'
import anime from 'animejs/lib/anime.es.js'
import './App-test.css'

const App = (props) => {

    let anim = (e, d) => anime({
        targets: e,
        left: '0px',
        backgroundColor: '#000',
        easing: 'spring(1,50,5,0)',
        delay: d
    })

    let anim1 = e => anime({
        targets: e,
        left: '-100px',
        backgroundColor: '#07c',
        easing: 'easeInOutQuad'
    })

    let anim2 = e => anime({
        targets: e,
        rotateY: 260,
        rotateX: 102,
        rotateZ: 17,
        // perspective: '25rem',
        easing: 'linear'
    })
    const location = useLocation()
    
    return (
        <Box
            width='100%'
            height='100%'
            bg='black'
        >
            <Flex justifyContent='space-around' alignItems='center' alignContent='center'>
                <Box
                    width={['0vw', '9vw']}
                    display={['none', 'block']}
                    height='100vh'
                    bg='white'
                    textAlign='center'
                    sx={{
                        // borderRight: '2px black solid'
                    }}
                >
                    <Flex flexDirection='column' alignItems='center'>
                        <Link to='/blog'>Blog</Link>
                        <Transition in={location.pathname.includes('blog')} timeout={1000} onEnter={e=>anim(e,100)} appear={true} onExit={anim1}>
                            <Box width={100} height={100} sx={{left:'-100px', position:'relative'}} bg='blue' color='white'>1</Box>
                        </Transition>
                        <Transition in={location.pathname.includes('blog')} timeout={1000} onEnter={e=>anim(e,200)} appear={true} onExit={anim1}>
                            <Box width={100} height={100} sx={{left:'-100px', position:'relative'}} bg='blue' color='white'>2</Box>
                        </Transition>
                        <Transition in={location.pathname.includes('blog')} timeout={1000} onEnter={e=>anim(e,300)} appear={true} onExit={anim1}>
                            <Box width={100} height={100} sx={{left:'-100px', position:'relative'}} bg='blue'  color='white'>3</Box>
                        </Transition>
                        <Transition in={location.pathname.includes('blog')} timeout={1000} onEnter={e=>anim(e,400)} appear={true} onExit={anim1}>
                            <Box width={100} height={100} sx={{left:'-100px', position:'relative'}} bg='blue'  color='white'>4</Box>
                        </Transition>
                    </Flex>
                </Box>
                <Box
                    width={['100vw', '80vw']}
                    height='100vh'
                    bg='white'
                    textAlign='center'
                >
                    <Switch>
                        <Route exact path='/'>HOME</Route>
                        <Route path='/blog'>BLOG</Route>
                        <Route path='/about'>ABOUT</Route>
                    </Switch>
                </Box>
                <Box
                    width={['0vw', '9vw']}
                    display={['none', 'block']}
                    height='100vh'
                    bg='white'
                    textAlign='center'
                    sx={{
                        // borderLeft: '2px black solid'
                    }}
                >
                    <Flex flexDirection='column' alignItems='center'>
                        <Link to='/about'>About</Link>
                        <Transition in={true} appear={true} timeout={5500} onEnter={anim2} onExit={anim2}>
                            <Box width={100} height={100} bg='blue' sx={{ "transform-style": "preserve-3d"}}/>
                        </Transition>
                        
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default hot(module)(App);