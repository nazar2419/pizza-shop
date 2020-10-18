import React from 'react';
import {Route } from 'react-router-dom';
import {Header} from './components';
import { Home, Cart } from './pages';
import './scss/app.scss';



function App() {
 
  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
      <Route path='/' exact component={Home}></Route>
      <Route path='/cart' exact component={Cart}></Route>
    </div>
  </div>
  );
}

export default App;
