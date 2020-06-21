import React from 'react';
import { 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardText, 
    CardBody, 
    CardTitle,
} from 'reactstrap';

function Menu(props){
    
    const [selectedDish, setSelectedDish] = React.useState(null);

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
    }

    const menu = props.dishes.map(dish => {
        return (
            <div key = {dish.id} className = 'col-12 col-md-5 m-1'>
                <Card onClick = {() => setSelectedDish({...dish})}>
                    <CardImg width = '100%' src = {dish.image} alt = {dish.name}/>
                    <CardImgOverlay body className = 'ml-5'>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
        <div className = 'container'>
            <div className = 'row'>
                {menu}
            </div>
            <div className = 'row'>
                {renderDish(selectedDish)}
            </div>
        </div>
    );
}

export default Menu;