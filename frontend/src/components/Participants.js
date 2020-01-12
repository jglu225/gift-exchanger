import React from 'react';
import {Form, Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';

class Participants extends React.Component {
    render() {
    //   if (this.props.currentStep !== 1) { 
    //     return null
    //   }

      return(

        <div>   
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <div><Button size="lg">-</Button></div>
                <div style={{lineHeight: "50px", fontSize: "45px", margin: "0 10px"}}>6</div>
                <div><Button size="lg">+</Button></div>
                <div style={{flexBasis: "100%"}}><h3>Number of Participants</h3></div>
            </div>

        </div>
        
      )
    }
  }

  export default Participants;