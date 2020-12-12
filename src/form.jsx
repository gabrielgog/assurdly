import React from "react"
import {Form, Button } from "react-bootstrap"


function form(){

    return <div className="login-form">
        <h1>Welcome!</h1>
        <p >Enter Login details</p>
    <Form className>
    <Form.Group controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

<Form className="forgot-password">FORGOT PASSWORD?</Form>
   
    <Button variant="secondary" type="submit">
      Login
    </Button>
  </Form>

  </div>
    
}

export default form;