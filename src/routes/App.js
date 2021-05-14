import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../container/Home'
import About from '../container/About'
import Blogs from '../container/Blogs'
import CaminoDev from '../container/CaminoDev'
import NotFound from '../container/NotFound'
import Layout from '../components/Layout'
import '../styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/camino-dev" component={CaminoDev} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
