import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import Participants from "./Participants.js"


class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentStep: 1};
    }

    render() {
        var currentStep = this.state.currentStep;

        return(
            <Card style={{margin: "40px 1%"}}>
                <Card.Header style={{fontSize: "24px", display: "flex"}}>
                    <div style={{marginLeft: "4%"}}>Participants</div>
                    <div style={{border: "1px solid grey", width: "25%", height: "0", margin: "auto 10px"}}></div>
                    <div>Terms</div>
                </Card.Header>

                <Form>
                    <Participants>

                    </Participants>
                </Form>

                <Card.Footer>
                    {currentStep == 1 && 
                        <div>
                            <Button onClick={() => this.setState({currentStep: 2})}>Next</Button>
                        </div>
                    }
                    {currentStep == 2 && 
                        <div>
                            <Button onClick={() => this.setState({currentStep: 1})}>Previous</Button>
                            <Button onClick={() => this.setState({currentStep: 2})}>Next</Button>
                        </div>
                    }
                </Card.Footer>
            </Card>
        )
    }
}

export default Wizard;
