import React from "react";

import {
  Alert,UncontrolledAlert,Button,
  Card,CardHeader,CardBody,CardTitle,
  Row,Col,Progress,Table,
  Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption,
  Popover, PopoverHeader, PopoverBody
} from "reactstrap";

const items = [
  {
    src: 'http://images6.fanpop.com/image/photos/36800000/School-image-school-36812016-500-434.jpg',
    altText: 'Slide 1',
    id: "image1"
  },
  {
    src: 'https://www.cdc.gov/features/healthy-schools-successful-students/healthy-schools-successful-students_456px.gif',
    altText: 'Slide 2',
    id:"image2"
  },
  {
    src: 'https://image.shutterstock.com/image-vector/school-building-bus-front-yard-260nw-322015064.jpg',
    altText: 'Slide 3',
    id:"image3"
  }
];

class Projects extends React.Component {

//Carousel Code

constructor(props) {
  super(props);
}

  render() {

   
    return (
      <div className="content">
        <h1>School Name</h1>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  School Name
                  
                  <Progress value="50" color="info" className="projectProgress"><b>Amount Collected: 2500</b>
                  </Progress>
                    <div className="text-center"><p>Fund Value: 5000</p></div>
              </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="5" lg="5" sm="5" xs="12">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg" className="sq-image" alt="schoolName" />

                    <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Fund Value</th>
                        <th>Fund Received</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>S123456 Projector</td>
                        <td>5000</td>
                        <td>2500</td>
                        <td><Button color="primary" size="sm">Donate</Button></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>S123457 Black Board</td>
                        <td>1000</td>
                        <td>200</td>
                        <td><Button color="primary" size="sm">Donate</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                      
                  </Col>
                  <Col sm="7" lg="7" md="7" xs="12">
                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>School Name</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Udaipur Govt. School</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Location</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Udaipur</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Unique #</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>S123456</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Medium</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>English</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Teacher Count</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>15</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>No. of Subjects</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>6</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Single Point of Contact</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Anuj ghera</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Allocated Funds(in Rs.)</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>10,000/-</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Completed Projects</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>a,b,c,d</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Education Board</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>CBSE</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Panchayat</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Udaipur</p>
                      </Col>
                    </Row>  

                    <Row>
                      <Col md="4" sm="4" lg="4" xs="6">
                        <p>Gender Ratio</p>
                      </Col>
                      <Col md="4" sm="4" lg="4" xs="6">
                      <Progress multi>
                        <Progress bar value="45">Boys(45%)</Progress>
                        <Progress bar color="info" value="55">Girls(55%)</Progress>
                      </Progress>
                      </Col>
                    </Row>

                  </Col>

                </Row>
              </CardBody>
            </Card>

          </Col>

        </Row>

      </div>
    );
  }
}

export default Projects;