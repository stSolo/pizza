import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import NotFound from './NotFound';
import { Router } from '@reach/router';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

function Main() {
    const dishes = DISHES;
        
    const [selectedDish, setSeelctedDish] = React.useState(null);

  function onDishSelect(dishId) {
    setSeelctedDish(dishId);
  }

    return (
      <div>
        <Header />
        <Router>
          <Home path = '/' />
          <Menu path = 'menu' dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
          <NotFound default />
        </Router>
        <Footer />
      </div>
    );
}

export default Main;