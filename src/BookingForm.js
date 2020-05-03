import React from 'react'
import {Form, Button} from 'react-bootstrap'
function BookingForm() {
    return (
        <div className="container col-md-8">
            <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Contact details" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Pick Up place..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="date" placeholder="From Date" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control type="date" placeholder="TO Date" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>	
        </div>
    )
}

export default BookingForm
