import React from 'react';
import { 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardText, 
    CardBody, 
    CardTitle,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

function DishDetail(props){
    function renderDish(dish){
        if(dish){
            return(
                <Card>
                    <CardImg width = '100%' src = {dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return (<div></div>)
    }

    function renderComments(comments){
        if(comments){
            return (
                [...comments.map(comment => {
                    return (
                    <ListGroup>
                        <ListGroupItem color = 'success'>{comment.comment}</ListGroupItem>
                        <ListGroupItem>{comment.author} {comment.date}</ListGroupItem>
                    </ListGroup>
                    );
                })]
            );
        }
        return (<div></div>)
    }

    return (
        <div className = 'row'>
            <div className = 'col-12 col-md-5 m-1'>
                {renderDish(props.selectedDish)}
            </div>
            <div className = 'col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ListGroup>
                    {renderComments(props.selectedDish?.comments)}
                </ListGroup>
            </div>
        </div>
    );
};

export default DishDetail;