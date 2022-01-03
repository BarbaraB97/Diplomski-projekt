
//Outlook==Overcast
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";

const Step10 = (props) => {

    return(
        <>
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)' }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h4>Let's take it step by step when Outlook==Overcast..</h4>
                <hr></hr><br />

                1. calculate dataset entropy -> perfect classification -> draw decision tree -> choose next node 

               
            </Container>


            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(9)}>Last Step</Button>
                </Col>
            </Row>
        </Container>

    </>);
}

export default Step10;