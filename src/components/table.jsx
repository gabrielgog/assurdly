import React from "react";

import { Container, Row, Col, Table } from "react-bootstrap";

function table() {
  return (
    <Container>
      <Row>
        <Col className="table">
          <Table>
            <thead>
              <tr>
                <th>Recent Logins</th>

                <th></th>

                <td>View More</td>
              </tr>
            </thead>

            <thead>
              <tr>

                  <th>Users</th>


                  <th>DATE/TIME</th>

                  



              </tr>
            </thead>




            <tbody>

                      <tr>

                          <td>Adeji</td>


                          <td>April 15, 2020 10:00AM</td>




                      </tr>


                      <tr>

                          <td>Debbi Ogana</td>

                          <td>March 30th, 2020 10:00AM</td>
                      </tr>


                      <td>Grace Effiom</td>

                      <td> March 15th, 2020 10:00AM</td>

                    <tr>


                      <td>Tosin Dokumu</td>

<td>Feb 28, 2020 10:00 AM</td>
                    </tr>

                  </tbody>
          </Table>
        </Col>

        <Col className="table">


            <Table>

                <thead>
                    <tr>

                        <th>Organizations</th>

            <th></th>


                        <td>View More</td>   


                    </tr>




                </thead>



                <thead>
                    <tr>

        <th>ORGANIZATIONS</th>


        <th>NUMBER OF USERS</th>

        <th>NUMBER OF LOANS</th>

                    </tr>




                </thead>


                <tbody>
                    <tr>

                        <td>Librety Credi</td>

                        <td>1,000</td>
                        <td>2,309</td>



                    </tr>


                    <tr>

                        <td>Debz Inc.</td>
                        <td>234</td>
                        <td>100</td>



                    </tr>


<tr>
                    <td>Irorun</td>
                    <td>500</td>
                    <td>308</td>


                   </tr>
                    
                    <tr>

                        <td>Kredi Bank</td>

                        <td>800</td>

                        <td>1,000</td>





                    </tr>





                </tbody>







            </Table>





        </Col>
      </Row>
    </Container>
  );
}

export default table;
