import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { useState } from "react";

const Step4 = (props) => {

    const [ chosenFeature, setChosenFeature ] = useState(null);

    const chooseFeature = (feature) => {
        setChosenFeature(feature);
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)' }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Let's take it step by step..</h3>
                <hr></hr><br />

                <Row>
                    <Col>
                        <Dataset></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        <Accordion defaultActiveKey="0"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>1. Compute the entropy for whole dataset:</b></Accordion.Header>
                                <Accordion.Body>
                                    <li class="list-group-item">
                                        <ol>Dataset entropy = <b>0.979</b>  <Button style={{ marginRight: "1em", marginLeft: "16em" }}>?</Button></ol>
                                    </li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="0"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>2. For every feature:</b></Accordion.Header>
                                <Accordion.Body>
                                    <li class="list-group-item">
                                        <ol>1. Calculate entropy for all categorical values</ol>
                                        <ol>2. Take average entropy for the current feature<br /></ol>
                                        <ol>3. Calculate information gain for the current feature</ol>
                                    </li>

                                    <br /><b> Choose the first feature: </b><br />

                                    <OverlayTrigger trigger="hover" placement="bottom"
                                        overlay={<Popover id="popover-basic">
                                            <Popover.Header as="h3">Categorical values:</Popover.Header>
                                            <Popover.Body>
                                                <ul>
                                                    <li>Sunny</li>
                                                    <li>Overcast</li>
                                                    <li>Rainy</li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button onClick={() => chooseFeature("Outlook")} md={2} style={{  backgroundColor: chosenFeature === "Outlook" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Outlook</Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="hover" placement="bottom"
                                        overlay={<Popover id="popover-basic">
                                            <Popover.Header as="h3">Categorical values:</Popover.Header>
                                            <Popover.Body>
                                                <ul>
                                                    <li>Hot</li>
                                                    <li>Mild</li>
                                                    <li>Cold</li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button onClick={() => chooseFeature("Temperature")} md={2} style={{ backgroundColor: chosenFeature === "Temperature" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Temperature</Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="hover" placement="bottom"
                                        overlay={<Popover id="popover-basic">
                                            <Popover.Header as="h3">Categorical values:</Popover.Header>
                                            <Popover.Body>
                                                <ul>
                                                    <li>High</li>
                                                    <li>Normal</li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button onClick={() => chooseFeature("Humidity")} md={2} style={{  backgroundColor: chosenFeature === "Humidity" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Humidity</Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="hover" placement="bottom"
                                        overlay={<Popover id="popover-basic">
                                            <Popover.Header as="h3">Categorical values:</Popover.Header>
                                            <Popover.Body>
                                                <ul>
                                                    <li>true</li>
                                                    <li>false</li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button onClick={() => chooseFeature("Windy")} md={3} style={{ backgroundColor: chosenFeature === "Windy" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Windy</Button>
                                    </OverlayTrigger>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>
            </Container>
            {chosenFeature ? <p>You've chosen the first feature. <br/> Now, let's calculate its information gain... </p>: null}

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

export default Step4;