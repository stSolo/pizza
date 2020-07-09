import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label,
    Button,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function CommentForm(props){
    
    function handleSubmit(v){
        props.addComment(props.dishId, v.rating, v.author, v.comment);
        props.toggle();
    };
    
    return(
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Add a comment</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="author" md={4}>Author</Label>
                    <Col md={12}>
                        <Control.text model=".author" id="author" name="author"
                        placeholder="Author"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="rating" md={4}>Rating</Label>
                    <Col md={12}>
                        <Control.select model=".rating" name="rating"
                        defaultValue = "1"
                        className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="comment" md={4}>Your Comment</Label>
                    <Col md={12}>
                        <Control.textarea model=".comment" id="comment" name="comment"
                        rows="6"
                        className="form-control" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                        <Button type="submit" color="primary">
                            Add a comment
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        </ModalBody>
    </Modal>
    );
};

export default CommentForm;