import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,
} from 'reactstrap';
import { Link } from '@reach/router';

function Header() {
      const [isNavOpen, setNavOpen] = React.useState(false);
      const [isModalOpen, setModalOpen] = React.useState(false);

      const username = React.useRef();
      const password = React.useRef();
      const remember = React.useRef();

      function toggleNav() {
        setNavOpen(!isNavOpen);
      }

      function toggleModal() {
        setModalOpen(!isModalOpen);
      }

      function handleLogin(event) {
        toggleModal();
        event.preventDefault();
        console.log(username);
        alert("Username: " + username.current.value + " Password: " + password.current.value
            + " Remember: " + remember.current.checked);

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
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                        </Nav>
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
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={username} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={password}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={remember}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
}

export default Header;
