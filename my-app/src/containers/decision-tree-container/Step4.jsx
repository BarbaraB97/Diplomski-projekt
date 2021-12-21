import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { useState } from "react";
import ModalWindow from "../../components/ModalWindow"
import datasetEntropyExample from "../../assets/entropyExample.png"
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'

const Step4 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    const chooseFeature = (feature) => {
        setChosenFeature(feature);
    }

    const handleClick = () => {
        show ? setChosenFeature(null) : setChosenFeature("Play");
        setShow(!show);
    }

    const computeDatasetEntropyBody =
        <div>
            <Row>
                <Col md={6}><Dataset isLabelHighlighted={true} chosenFeature={"Play"} isTableStriped={true}></Dataset></Col>
                <Col md={6}>
                    <img src={datasetEntropyExample} alt="example" height={250} />
                </Col>
            </Row>
        </div>

    return (
        <>
            <Container style={{ width: '80em', background: 'rgb(252, 249, 242)' }}>
                <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                    <h3>Let's take it step by step..</h3>
                    <hr></hr><br />

                    <Row>
                        <Col>
                            <Dataset isTableStriped={true} chosenFeature={chosenFeature}></Dataset>
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <Accordion defaultActiveKey="0"
                                style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>1. Compute the entropy for whole dataset:</b></Accordion.Header>
                                    <Accordion.Body>
                                        <li class="list-group-item">
                                            <ol>Dataset entropy = <b>0.9403</b>  <Button onClick={() => handleClick(!show)} style={{ marginRight: "1em", marginLeft: "16em" }}>?</Button></ol>
                                        </li>
                                        <Row>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em" }} in={show}>
                                                <div >
                                                    <ul>
                                                        <Row>
                                                            <EquationOptions
                                                                errorHandler={defaultErrorHandler}>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy = sum(c,C, 2, -p(c)* log2(p(c)))'
                                                                />
                                                            </EquationOptions>
                                                        </Row><br/>

                                                        <li><b>C</b>= possible outcomes = &#123; YES, NO &#125;</li>
                                                        <li><b>P(c)</b> = possibility of certain outcome</li>
                                                        <li>Out of <b>14</b> instances, <b>9</b> are classified as <b>YES</b> and <b>5</b> are classified as <b>NO</b> </li><br/>
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 9/14'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 5/14'
                                                                    />
                                                                </Col>
                                                            </Row><br/>
                                                            <Row>
                                                            <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='Entropy(dataset) = p(c) * log2(p(c1)) - p(c2)*log2(p(c2))'
                                                                    />
                                                                       <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='Entropy(dataset) = 9/14*log2(9/14) - 5/14*log2(5/14)'
                                                                    />
                                                                               <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='Entropy(dataset) = 0.9403'
                                                                    />
                                                            </Row>

                                                        </EquationOptions>

                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </Row>
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
                                            <Button onClick={() => chooseFeature("Outlook")} md={2} style={{ backgroundColor: chosenFeature === "Outlook" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Outlook</Button>
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
                                            <Button onClick={() => chooseFeature("Humidity")} md={2} style={{ backgroundColor: chosenFeature === "Humidity" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Humidity</Button>
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
                {chosenFeature ? <p>You've chosen the first feature. <br /> Now, let's calculate its information gain... </p> : null}

                <Row>
                    <Col >
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(6)}>Last Step</Button>
                    </Col>
                </Row>
            </Container>
            <ModalWindow show={showModal}
                title={"How to compute entropy for the whole dataset?"}
                body={computeDatasetEntropyBody}
            ></ModalWindow>
        </>
    );
}

export default Step4;