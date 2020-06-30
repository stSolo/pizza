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
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


function Main(props) {
        
    const [selectedDish, setSeelctedDish] = React.useState(null);

    const DishWithId = ({dishId}) => {
      return(
          <Dishdetail dish={props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
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
            dish={props.dishes.filter((dish) => dish.featured)[0]}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
          />
          <MenuRoute path = 'menu'>
            <Menu path = '/' dishes={props.dishes} />
            <DishWithId path = ':dishId' />
          </MenuRoute>
          <Contact path = 'contactus' />
          <About path = 'aboutus' leaders = {props.leaders} />
          <NotFound default />
        </Router>
        <Footer />
      </div>
    );
}

export default connect(mapStateToProps)(Main);