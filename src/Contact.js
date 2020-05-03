import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Contact = () => (

  // <!-- Start contact-page Area -->
  <section className="contact-page-area section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-flex flex-column address-wrap">
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-home"></span>
            </div>
            <div className="contact-details">
              <h5>Dhaka, Bangladesh</h5>
              <p>56/8, West Panthapath</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-phone-handset"></span>
            </div>
            <div className="contact-details">
              <h5>00 (880) 9865 562</h5>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-envelope"></span>
            </div>
            <div className="contact-details">
              <h5>support@codethemes.com</h5>
              <p>Send us your query anytime!</p>
            </div>
          </div>														
        </div>
        <div className="col-lg-6">
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>	
      </div>
      </div>
    </div>	
  </section>
  // <!-- End contact-page Area -->
)
