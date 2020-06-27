import React from 'react';
import { Breadcrumb,
        BreadcrumbItem, 
        Button, 
        Form, 
        FormGroup, 
        Label, 
        Input,
        Col,
        FormFeedback,
    } from 'reactstrap';
import { Link } from '@reach/router';

function Contact(props) {
    const [state,setState] = React.useState({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            },
    });

    const errors = validate(state.firstname, state.lastname, state.telnum, state.email);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setState({
          ...state,
          [name]: value
        });
    }

    function handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(state));
        alert('Current State is: ' + JSON.stringify(state));
        event.preventDefault();
    }

    const handleBlur = (field) => {
        setState({
            ...state,
            touched: {...state.touched, [field]: true},
        });
    }

    function validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if(state.touched.firstname && firstname.length < 3){
            errors.firstname = 'Name must be a greater then 3 chars'
        } else if (state.touched.firstname && firstname.length > 10){
            errors.firstname = 'Name must be a lesser then 10 chars'
        }

        if(state.touched.lastname && lastname.length < 3){
            errors.lastname = 'Last Name must be a greater then 3 chars'
        } else if (state.touched.lastname && lastname.length > 10){
            errors.lastname = 'Last Name must be a lesser then 10 chars'
        }

        const reg = /^\d+$/;
        if(state.touched.telnum && !reg.test(state.telnum)){
            errors.telnum = 'Tel is Incorrect!';
        }

        if(state.touched.email && email.length < 10){
            errors.email = 'Incorrect Email';
        }

        return errors
    };

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={() => handleBlur('firstname')}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={() => handleBlur('lastname')}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={() => handleBlur('telnum')}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={() => handleBlur('email')}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>

        </div>
    );
}

export default Contact;