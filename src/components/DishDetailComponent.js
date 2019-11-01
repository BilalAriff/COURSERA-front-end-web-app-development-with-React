import React, { Component } from 'react';
import { Errors, LocalForm, Control,  } from 'react-redux-form';
import {Card,  CardTitle, Breadcrumb,  CardText, CardImg,  BreadcrumbItem, Modal, ModalHeader, CardBody, Container, ModalBody, Button, Label,  Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';


import { breakStatement } from '@babel/types';

  
const determineMaxLength = (len) => (val) => !(val) || (val.length <= len); 
const determineMinLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        });
    }

    handleSubmit(inputs) {
        alert('Your inputs:' + JSON.stringify(inputs));
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> 
                        <h4>Submit Comment</h4>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Container>
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor='rating'>Rating</Label>
                                        <Control.select model='.rating' id='rating' name='rating' className='form-control'>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor='author'>Author</Label>
                                        <Control.text model='.author' id='author' name='author' className='form-control' validators={
                                            {
                                                minimumLength: determineMinLength(3), maximumLength: determineMaxLength(15)
                                            }
                                        } />
                                        <Errors model='.author' messages={
                                            {
                                                minimumLength: "The name must exceed 2 characters",
                                                maximumLength: "The name cannot exceed 15 characters"
                                            }
                                        } show='touched' className='text-danger' />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor='comment'>Your Comment</Label>
                                        <Control.textarea rows='6' model='.comment' id='comment' name='comment' className='form-control' />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col xs={{size: 3, offset: 0}}>
                                        <Button color='primary' className='form-control'>Submit</Button>
                                    </Col>
                                </Row>
                            </Container> 
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <Button onClick={this.toggleModal} outline><span className='fa fa-lg fa-edit'></span>New Comment</Button>
            </div>
        );
    }
 }

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardBody>{dish.description}</CardBody>
            </CardBody>
        </Card>
    );
}

function RenderComments({dishComments}) {
    const comments = dishComments.map((comment) => {
        return (
            <li key={comment.id}>{comment.comment}
            <br />
            <br />
            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
            </li>
        );
    });

    return (
        <React.Fragment>
            {comments}
            <CommentForm />
        </React.Fragment>
    );
}


const DetaildishComponent = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <h3>{props.dish.name}</h3>
                <hr />
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        <RenderComments dishComments={props.comments} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DetaildishComponent;