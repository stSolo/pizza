import React from 'react';
import { 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardTitle,
} from 'reactstrap';
import DishDetail from './DishdetailComponent';

function Menu(props){
    
    const [selectedDish, setSelectedDish] = React.useState(null);

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
            <DishDetail 
            selectedDish = {selectedDish}
            />
        </div>
    );
}

export default Menu;