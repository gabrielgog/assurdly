import React from "react"

import {Container, Col, Row} from "react-bootstrap"
import {Table, Thead, Tr, Tbody} from "react-bootstrap"

function Usertool(){


    return <div >


        <Container>

        <h1>Dashboard</h1>



            <Row > 

                <Col className="user-tools">
                <p>User</p>
                <h1>2, 453</h1>
                
                
                </Col>



                <Col className="user-tools">
                
            <p>Active Users</p>        

            <h1>2, 453</h1>        
                
                
                
                </Col>


                <Col className="user-tools">

                <p>Users with Loans</p>
            <h1>2,453</h1>
    

           
                
                </Col>


                <Col className="user-tools">
                
                
                <p>Users with savings</p>

                <h1>2453</h1>
                </Col>

            
            
            </Row>





<Table>

    
   




</Table>
            






        </Container>




    </div>
}



export default Usertool;