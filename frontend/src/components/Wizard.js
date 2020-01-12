import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import Participants from "./Participants.js"
import Terms from "./Terms.js";
import Exceptions from "./Exceptions.js";
import "./styles/Wizard.css";

class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentStep: 1};
    }

    render() {
        var currentStep = this.state.currentStep;

        return(
            <Card className="wizard">
                <Card.Header className="wizard_header">
                    <div className={(currentStep==1) ? "current" : null}>Participants</div>
                    <div className="line"></div>
                    <div className={(currentStep==2) ? "current" : null} >Exceptions</div>
                    <div className="line"></div>
                    <div className={(currentStep==3) ? "current" : null} >Terms</div>

                </Card.Header>

                <Form>
                    {currentStep === 1 && <Participants></Participants>}
                    {currentStep === 2 && <Exceptions></Exceptions>}
                    {currentStep === 3 && <Terms></Terms>}
                </Form>

                <Card.Footer>
                    {currentStep === 1 && 
                        <div className="step1Footer">
                            <Button onClick={() => this.setState({currentStep: 2})}>Next</Button>
                        </div>
                    }
                    {currentStep === 2 && 
                        <div className="step2Footer">
                            <Button onClick={() => this.setState({currentStep: 1})}>Previous</Button>
                            <Button onClick={() => this.setState({currentStep: 3})}>Next</Button>
                        </div>
                    }
                    {currentStep === 3 && 
                        <div className="step3Footer">
                            <Button onClick={() => this.setState({currentStep: 2})}>Previous</Button>
                            <Button>Submit</Button>
                        </div>
                    }
                </Card.Footer>
            </Card>
        )
    }
}

export default Wizard;
