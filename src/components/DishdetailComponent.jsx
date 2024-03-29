import React from 'react';
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle,
    ListGroup,
    ListGroupItem,
    Breadcrumb, 
    BreadcrumbItem,
    Button,
} from 'reactstrap';
import Loading from './LoadingComponent';
import { Link } from '@reach/router';
import CommentForm from './CommentForm';
import baseUrl from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function DishDetail(props){
    const [isCommentFormOpen, setCommentFormOpen] = React.useState(false);

    function toggleCommentForm(e){
        if(e){
            e.preventDefault();
        }
        setCommentFormOpen(!isCommentFormOpen);
    };
    
    
    
    function renderDish(dish){
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(dish !== null){
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width = '100%' src = {baseUrl + dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
            );
        }
        return (<div></div>)
    }

    function renderComments(comments){
        if(comments){
            return (
                [...comments.map(comment => {
                    return (
                    <Fade in>
                    <ListGroup>
                        <ListGroupItem color = 'success'>{comment.comment}</ListGroupItem>
                        <ListGroupItem>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</ListGroupItem>
                    </ListGroup>
                    </Fade>
                    );
                })]
            );
        }
        return (<div></div>)
    }

    return (
        <div className = 'container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="../">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish?.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish?.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className = 'row'>
                <div className = 'col-12 col-md-5 m-1'>
                    {renderDish(props.dish)}
                </div>
                <div className = 'col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <Stagger in>
                    <ListGroup>
                        {renderComments(props.comments)}
                    </ListGroup>
                    </Stagger>
                    <Button outline className = "mt-5" onClick = {toggleCommentForm}><span className="fa fa-edit fa-lg"></span> Add a Comment</Button>
                    <CommentForm 
                    isOpen = {isCommentFormOpen}
                    toggle = {toggleCommentForm}
                    addComment = {props.addComment} 
                    dishId = {props.dish?.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default DishDetail;