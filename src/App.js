import React, { Fragment, Suspense, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Footer } from './components'

const history = createBrowserHistory()
const Home = lazy(() => import('./scenes/Home'))
const About = lazy(() => import('./scenes/About'))
const Sessions = lazy(() => import('./scenes/Sessions'))
const Contact = lazy(() => import('./scenes/Contact'))
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Router history={history}>
      <Suspense fallback={<div>Entering the den...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sessions" component={Sessions} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
    <Footer />
  </Fragment>
)

export default App
