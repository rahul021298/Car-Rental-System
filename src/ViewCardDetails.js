import {Container, Row, Card, Col, Button, Form} from 'react-bootstrap';
import { Contact } from './Contact';
import React, { Component } from 'react'
import PaginationLink from './PaginationLink'

export class ViewCardDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: '',
             exp: '',
             image: '',
             title: '',
             text: '',
             muted: ''
        }
        this.appendData = this.appendData.bind(this);
    }
    
    appendData(id, event){
        this.setState({
            exp: '<h1>HELLO</h1>',
            image: (require('./images/car'+id+'.jpeg')),
            title: 'Card title',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            muted: 'Last updated 3 mins ago'
        });
    }
    bookCar(){
        return <Contact />
    }
    render() {
        return (
            <div>
            <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link><Button onClick={()=>this.appendData(1)} id="btn" value="hello">View</Button></Card.Link>
                    <Card.Link href="/bookingform?id=1"><Button>Book</Button></Card.Link>
                </Card.Body>
                </Card>
    
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link><Button onClick={()=>this.appendData(2)}>View</Button></Card.Link>
                    <Card.Link href="/bookingform?id=2"><Button disabled>Book</Button></Card.Link>
                </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link><Button onClick={()=>this.appendData(1)}>View</Button></Card.Link>
                    <Card.Link href="/bookingform?id=1"><Button>Book</Button></Card.Link>
                </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <div className="card">
                <img className="card-img-top" src={this.state.image} alt="" />
                <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.text}</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">{this.state.muted}</small>
                </div>
                </div>
                </Col>
            </Row>
            <PaginationLink />
            </Container>
            </div>
        )
    }
}

export default ViewCardDetails

