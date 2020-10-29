import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {Route } from 'react-router-dom';
import {Header} from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import './scss/app.scss';




// function App() {
//  const [pizzas, setPizzas] = useState([]);

//  useEffect(() => {

//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas);
//     });

//  }, []);

//   return (
//     <div className="wrapper">
//       <Header/>
//     <div className="content">
//       <Route path='/' exact render={() => <Home items={pizzas} />}></Route>
//       <Route path='/cart' exact component={Cart}></Route>
//     </div>
//   </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
          this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
        <Header/>
      <div className="content">
        <Route path='/' exact render={() => <Home items={this.props.items} />}></Route>
        <Route path='/cart' exact component={Cart}></Route>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
    setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
