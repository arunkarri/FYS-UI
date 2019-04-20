import React from "react";
import { API_ROOT } from '../variables/api';
import { Button,Card,CardHeader,CardBody,CardTitle,Row,Col,Progress } from "reactstrap";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    const queryString = require('query-string');
    var parsed = queryString.parse(this.props.location.search);

    this.state = {
      data: {
        insta_id: parsed.payment_id,
        payment_status: parsed.payment_status.toUpperCase(),
        payment_id: parsed.id,
        transaction_id: parsed.transaction_id
      }
    } 
    
  }


  componentDidMount() {

    let input=
    {
      "instamojoId": this.state.data.insta_id,
      "paymentId": this.state.data.payment_id,
      "transactionId": this.state.data.transaction_id,
      "paymentStatus": this.state.data.payment_status,
      "token": localStorage.getItem('token').split(' ')[1]
    }

    fetch(`${API_ROOT}/rest/user/payment`,{
     method: 'PUT',
     headers: {
       "Content-Type": "application/json",
       "Authorization": JSON.stringify(localStorage.getItem('token'))
     },
     body: JSON.stringify(input)
   })
     .then((resp) => {
       return resp.clone().json();
     })
     .then((res) => {
       this.setState({schoolDetails: res});
     });
  }

  
  render() {
    return ( 
      <div>dada</div>
    );
  }
}

export default Payment;