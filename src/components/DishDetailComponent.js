import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {

constructor(props) {
    super(props);

    this.state = {

    }
} // End of constructor 

renderDishDetail(dish) {
    
        if (dish != null)
            return(
                <Card>
                    {console.log(dish)}
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                    {console.log(this.props.dish)}
                </Card>
            );
        else
            return(
                <div>
                    {console.log("No Dish Selected")}
                </div>
            );
    }

    renderDishComments(dish) {
    
        if (dish != null) {
            const comments = dish.comments.map( (comments) => {
                return(
                    <CardBody key={comments.id}> 
                        <CardText>{comments.comment}</CardText>
                        <CardText>-- {comments.author} ,  {comments.date}</CardText>
                        {console.log("Comments are working")}
                    </CardBody>
                );
            })
            return (
                <Card>
                <CardHeader>
                   <CardTitle>Comments</CardTitle>
                </CardHeader>
                 {comments}
                </Card> 
            );
        }
        else
            return(
                <div>
                    {console.log("No Comments to show")}
                </div>
            );
    }
 
    render() {
        return(
            <div className="row">
                <div className="col-sm-12 col-md-5 m-1">
                   {this.renderDishDetail(this.props.dish)}
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderDishComments(this.props.dish)}
                </div>
            </div>
        );
    }

} //end of DishDetailTwo class

export default DishDetails;