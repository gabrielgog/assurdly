import React from "react";


import { Container, Col, Row } from "react-bootstrap";

function Usertool() {
  return (
    <div className="dashboard_style" >
      <Container>
        <Row>
          <Col className="user-tools">
            <div >
                <img src="/images/icons/organization.svg"/> <br></br>
              <p>ORGANIZATIONS</p>
              <h3>2,453</h3>
            </div>
          </Col>

          <Col className="user-tools">
          <img src="/images/icons/user.svg"/> <br></br>

            <p>USERS</p>
            <h3>2,453</h3>
          </Col>

          <Col className="user-tools">
          <img src="/images/icons/money.svg"/> <br></br>

            <p>LOANS</p>
            <h3>₦ 12,453</h3>
          </Col>

          <Col className="user-tools">
          <img src="/images/icons/savings.svg"/> <br></br>

              <p>SAVINGS</p>

              <h3>₦102, 453</h3>
          
          
          </Col>
        </Row>
      </Container>

      


  </div>
  );
}

export default Usertool;
