import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetails extends Component {

constructor(props) {
    super(props);

    this.state = {
        dish: this.props.selectedDish
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
                        <CardText>-- {comments.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</CardText>
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
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div>
                <div className="col-sm-12 col-md-5 m-1">
                   {this.renderDishDetail(this.props.dish)}
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderDishComments(this.props.dish)}
                </div>
                </div>

            </div>
        );
    }

} //end of DishDetailTwo class

export default DishDetails;