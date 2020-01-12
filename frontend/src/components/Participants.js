import React from 'react';
import {Form, Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import "./styles/Participants.css";

class Participants extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numParticipants: 6,
        }

        this.incParticipants = this.incParticipants.bind(this);
        this.decParticipants = this.decParticipants.bind(this);
    }

    incParticipants(){
        if(this.state.numParticipants < 16)
            return this.setState({numParticipants: this.state.numParticipants+2});
    }

    decParticipants(){
        if(this.state.numParticipants > 6)
            return this.setState({numParticipants: this.state.numParticipants-2});
    }

    render() {


        return(

            <div>   
                <div className="numParticipants">
                    <div><Button onClick={this.decParticipants} size="lg">-</Button></div>
                    <div className="numParticipants_number">{this.state.numParticipants}</div>
                    <div><Button onClick={this.incParticipants} size="lg">+</Button></div>
                    <div className="numParticipants_label"><h3>Number of Participants</h3></div>
                </div>

            </div>
        
      )
    }
  }

  export default Participants;