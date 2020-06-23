import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
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
        <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
        <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
        <Footer />
      </div>
    );
}

export default Main;