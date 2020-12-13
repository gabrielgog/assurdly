import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,  Row, Col} from "react-bootstrap"
import Form from "./form"

function Login(){

    return <Container>
  <Row>
    <Col  className="usr-login" className="login-img"> 
    
    <img src="./images/pablo-sign-in 1.svg"></img>
    
    
    
    
    </Col>
    <Col >
    <Form />
    
    </Col>
  </Row>

  </Container>




      
  
}

export default Login;