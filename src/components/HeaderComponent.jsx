import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from '@reach/router';

function Header() {
      const [isNavOpen, setNavOpen] = React.useState(false);

      function toggleNav() {
        setNavOpen(!isNavOpen);
      }

      const isActive = ({isCurrent}) => {
          return isCurrent?{className: 'nav-link active'}:null
      }

        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" getProps = {isActive} to='/'><span className="fa fa-home fa-lg"></span> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" getProps = {isActive} to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" getProps = {isActive}  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" getProps = {isActive} to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
}

export default Header;
