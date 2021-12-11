import { useState } from "react";
import { Container, Row, Button, Col, Accordion } from "react-bootstrap";
import Dataset from '../../components/Dataset'
const Step2 = (props) => {

    const [areFeaturesHighlighted, setHighlightFeatures] = useState(false);
    const [isLabelHighlighted, setHighlightLabel] = useState(false);

    const highlightFeatures = () => {
        setHighlightFeatures(!areFeaturesHighlighted);
    }

    const hightlightLabel = () => {
        setHighlightLabel(!isLabelHighlighted);
    }

    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Step2: Explaining the dataset...</h3><br />

                <Row>
                    <Col>
                        <Dataset areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted}></Dataset>
                    </Col>
                    <Col >
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => highlightFeatures()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are features?</Accordion.Header>
                                <Accordion.Body>•Outlook <br />•Temperature <br />•Humidty <br />•Windy <br />•Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => hightlightLabel()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are labels?</Accordion.Header>
                                <Accordion.Body>•Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>

            </Container>
            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(3)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step2;