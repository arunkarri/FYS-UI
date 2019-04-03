import React from "react";
import { API_ROOT } from '../variables/api';
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Progress
} from "reactstrap";
import axios from 'axios';
class Schools extends React.Component {
  constructor(props){
    super(props);
    this.state={
      schools:[]
    }
  }
  

  componentDidMount(){
    axios.get(`${API_ROOT}/rest/school/all`,{
      // method: 'GET',
       crossDomain: true ,
      headers: {
        "Content-Type": "application/json",
        "Authorization": JSON.stringify(localStorage.getItem('token'))
      }
    })
      .then((resp) => {
        return resp.clone().json();
      })
      .then((res) => {
        console.log(res);
      });
  }



  render() {
    return (
      <div className="content">
        <h1>Onboarded Schools</h1>
        <Row>
          <Col md="5">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  School Name
              </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg" className="sq-image" alt="schoolName" />
                  </Col>
                  <Col sm="12" md="9">
                    <Row>
                      <Col md="4">
                        <p>Location</p>
                      </Col>
                      <Col md="8">
                        <p>Jaipur</p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <p>Unique #</p>
                      </Col>
                      <Col md="8">
                        <p>S123456</p>
                      </Col>
                    </Row>

                    
                    {/* <div className="text-center"><p>Fund Collected: 2500</p></div> */}
                    {/* <div className="text-center"><p>Fund Value: 5000</p></div> */}
                    <Progress value="40" color="info">Amount Collected: 2500</Progress>
                    <div className="text-center"><p>Fund Value: 5000</p></div>
                    
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

export default Schools;