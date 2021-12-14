import { useState } from "react";
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover } from "react-bootstrap";
import Dataset from '../../components/Dataset'

const Step5 = (props) => {

    const [chosenFeature, setChosenFeature ] = useState("Temperature");

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>2. Let's calculate entropy for feature: TEMPERATURE </h3>
                <hr></hr><br />

                <Row>
                    <Col>
                        <Dataset chosenFeature={chosenFeature}></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>1. Calculate entropy for all categorical values:</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>HOT</b>: Entropy = <b>0.8133</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>MILD</b>: Entropy = <b>0.7655</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>COLD</b>: Entropy = <b>0.746</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>2. Take average information entropy for the current feature:</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>AVG. ENTROPY: 0.3454</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>3. Calculate gain for the current feature</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>INFORMATION GAIN: 0.1445</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
              
            </Container>
            Let's do this for the rest of the features...<br/>
            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(5)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step5;