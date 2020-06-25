import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import NotFound from './NotFound';
import { Router } from '@reach/router';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MenuRoute from './MenuRoute';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function Main() {
    const dishes = DISHES;
    const leaders = LEADERS;
    const promotions = PROMOTIONS;
    const comments = COMMENTS;
        
    const [selectedDish, setSeelctedDish] = React.useState(null);

    const DishWithId = ({dishId}) => {
      return(
          <Dishdetail dish={dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
      );
    };
    


  function onDishSelect(dishId) {
    setSeelctedDish(dishId);
  }

    return (
      <div>
        <Header />
        <Router>
          <Home path = '/' 
            dish={dishes.filter((dish) => dish.featured)[0]}
            promotion={promotions.filter((promo) => promo.featured)[0]}
            leader={leaders.filter((leader) => leader.featured)[0]}
          />
          <MenuRoute path = 'menu'>
            <Menu path = '/' dishes={dishes} />
            <DishWithId path = ':dishId' />
          </MenuRoute>
          <Contact path = 'contactus' />
          <About path = 'aboutus' leaders = {leaders} />
          <NotFound default />
        </Router>
        <Footer />
      </div>
    );
}

export default Main;