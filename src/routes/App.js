import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import About from '../container/About';
import Blogs from '../container/Blogs';
import CaminoDev from '../container/CaminoDev';
import ExtVsCode from '../container/ExtVsCode';
import AtajosVsCode from '../container/AtajosVsCode';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';
import '../styles/App.scss';

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/camino-dev" component={CaminoDev} />
        <Route exact path="/extensiones-vsc" component={ExtVsCode} />
        <Route exact path="/atajos-vsc" component={AtajosVsCode} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
