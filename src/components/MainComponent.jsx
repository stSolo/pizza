import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import NotFound from './NotFound';
import { Router, Location } from '@reach/router';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MenuRoute from './MenuRoute';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/actionCreator';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments.comments,
    promotions: state.promotions.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())

});



function Main(props) {
        
    const [selectedDish, setSeelctedDish] = React.useState(null);

    React.useEffect(
      () => {
        props.fetchDishes();
        props.fetchComments();
        props.fetchPromos();
      }
      ,[])

    const DishWithId = ({dishId}) => {
      return(
          <Dishdetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            isLoading={props.dishes.isLoading}
            errMess={props.dishes.errMess}
            comments={props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} 
            addComment={props.addComment}
            />
      );
    };
    


  function onDishSelect(dishId) {
    setSeelctedDish(dishId);
  }

    return (
      <div>
        <Header />
        <Location>
        {({ location }) => (
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Router>
          <Home path = '/' 
            dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading={props.dishes.isLoading}
            dishesErrMess={props.dishes.errMess}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
          />
          <MenuRoute path = 'menu'>
            <Menu path = '/' dishes={props.dishes} />
            <DishWithId path = ':dishId' />
          </MenuRoute>
          <Contact path = 'contactus' resetFeedbackForm = {props.resetFeedbackForm}/>
          <About path = 'aboutus' leaders = {props.leaders} />
          <NotFound default />
        </Router>
        </CSSTransition>
        </TransitionGroup>
            )}
        </Location>
        <Footer />
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);