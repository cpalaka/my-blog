import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import App from './App'
import theme from './theme'
import { ThemeProvider } from 'theme-ui'
import 'rxjs'

const rootElement = document.getElementById("root")
const ReduxApp =
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
render(ReduxApp, rootElement);