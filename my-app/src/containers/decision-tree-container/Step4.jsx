import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { useState } from "react";
import { Equation, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step4 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [show, setShow] = useState(false);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    const chooseFeature = (feature) => {
        setChosenFeature(feature);
    }

    const handleClick = () => {
        show ? setChosenFeature(null) : setChosenFeature("Play");
        chosenFeatureValue ? setChosenFeatureValue(null) : setChosenFeatureValue("yes");
        setShow(!show);
    }

    return (
        <>
            <Container  className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop:"1em"}}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4><b>1.</b> Compute the entropy for whole dataset</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr />
                <Container style={{ paddingBottom: "1em" }}>
            
                    <Row>
                        <Col>
                            <Dataset isTableStriped={false} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue}></Dataset>
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
                                                        <li>
                                                            <b>Entropy:</b>
                                                        </li>
                                                        <Row style={{ textAlign: "center" }}>
                                                            <Col md={{ span: 8, offset: 1 }}>
                                                                <EquationOptions
                                                                    errorHandler={defaultErrorHandler}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(X) = sum(x,X, 2, -p(x)* log2(p(x)))'
                                                                    />
                                                                </EquationOptions>
                                                            </Col>

                                                        </Row><br />

                                                        <li><b>X</b> = possible outcomes = &#123; YES, NO &#125;</li>
                                                        <li><b>P(X)</b> = possibility of certain outcome</li>
                                                        <li>Out of <b>14</b> instances, <b>9</b> are classified as <b>YES</b> and <b>5</b> are classified as <b>NO</b> </li><br />
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
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) =(-1)* 9/14*log2(9/14) - 5/14*log2(5/14)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) = 0.9403'
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

                                        <br /><b> Features: </b><br />

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
                                                        <li>Cool</li>
                                                    </ul>
                                                </Popover.Body>
                                            </Popover>}>
                                            <Button onClick={() => chooseFeature("Temperature")} md={2} style={{backgroundColor: chosenFeature === "Temperature" ? "#eab676" : "#76b5c5", marginRight: "1em"}}>Temperature</Button>
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
                {chosenFeature ? <p>Now, let's calculate information gain for all features... </p> : null}

                <Row>
                    <Col >
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                        <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(14)}>Last Step</Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Step4;