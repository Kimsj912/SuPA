import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import Route from './Route'
import Root from './pages/Root'
import About from './pages/About'

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
)
