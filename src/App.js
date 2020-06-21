import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

function App() {
  const [dishes, setDishes] = React.useState([...DISHES]);

  return (
    <div className="App">
      <Navbar dark color = 'primary'>
        <div className = 'container'>
          <NavbarBrand href = '/'>
            New Pizza Shop
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {dishes} />
    </div>
  );
}

export default App;
