import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
