import { useState } from "react";
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'

const Step5 = (props) => {

    const [chosenFeature, setChosenFeature] = useState("Temperature");
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>2. Let's calculate entropy for feature: TEMPERATURE </h3>
                <hr></hr><br />

                <Row>
                    <Col md={4}>
                        <Dataset chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue} isTableStriped={false} highLightLabelValue={true}></Dataset>
                    </Col>
                    <Col md={1}></Col>
                    <Col style={{ textAlign: "left" }} md={7}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>1. Calculate entropy for all categorical values:</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "hot" ? setChosenFeatureValue(null) : setChosenFeatureValue("hot")} style={{cursor:"pointer"}}>
                                                <b >HOT</b>: Entropy = <b>1.0</b><hr />
                                            </ul>

                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "hot"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>4</b> outcomes in case when <b>Temperature=Hot</b>:<br /> <b>2</b> are <b>YES</b> and <b>2</b> are <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 2/4'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 2/4'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Hot) = (-1)*p(c) * log2(p(c1)) - p(c2)*log2(p(c2))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Hot) = (-1)* (2/4)*log2(2/4) - 2/4*log2(2/4)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Hot) = 1.0'
                                                                />
                                                            </Row>
                                                        </EquationOptions>
                                                    </ul>
                                                </div>
                                            </Collapse>



                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "mild" ? setChosenFeatureValue(null) : setChosenFeatureValue("mild")}  style={{cursor:"pointer"}}>
                                                <b>MILD</b>: Entropy = <b>0.9183</b><hr />
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "mild"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>6</b> outcomes in case when <b>Temperature=Mild</b>:<br /> <b>4</b> are labeled as <b>YES</b> and <b>2</b> as <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 4/6'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 2/6'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Mild) = (-1)*p(c) * log2(p(c1)) - p(c2)*log2(p(c2))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Mild) = (-1)* (4/6)*log2(4/6) - 2/6*log2(2/6)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Mild) = 0.9183'
                                                                />
                                                            </Row>
                                                        </EquationOptions>
                                                    </ul>
                                                </div>
                                            </Collapse>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "cool" ? setChosenFeatureValue(null) : setChosenFeatureValue("cool")} style={{cursor:"pointer"}}>
                                                <b>COLD</b>: Entropy = <b>0.8113</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "cool"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>4</b> outcomes in case when <b>Temperature=Cool</b>:<br /> <b>3</b> are labeled as <b>YES</b> and <b>1</b> as <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 3/4'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 1/4'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Cool) = (-1)*p(c) * log2(p(c1)) - p(c2)*log2(p(c2))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Cool) = (-1)* (3/4)*log2(3/4) - 1/4*log2(1/4)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Entropy(Temperature=Cool) = 0.8113'
                                                                />
                                                            </Row>
                                                        </EquationOptions>
                                                    </ul>
                                                </div>
                                            </Collapse>
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
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "avg entropy" ? setChosenFeatureValue(null) : setChosenFeatureValue("avg entropy")} style={{cursor:"pointer"}}>
                                                <b>AVG. INFORMATION ENTROPY = 0.9111</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "avg entropy"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Average entropy Information for feature TEMPERATURE:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='I(Temperature) = sum(t,T,3, p(t)*H(t))'
                                                                />
                                                            </Row><br />
                                                        </EquationOptions>
                                                        <li>
                                                            <b>P(t)</b>= possibility of feature T to take on value t<br />
                                                        </li>
                                                        <li>
                                                            <b>H(t)</b>= entropy of feature T with value t
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='I(Temperature) = P(Hot)*H(Hot) + P(Mild)*H(Mild) + P(Cool)*H(Cool)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='I(Temperature) = 4/14*1.0 + 6/14*0.9183 + 4/14*0.8113'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='I(Temperature) = 0.9111'
                                                                />
                                                            </Row><br />
                                                        </EquationOptions>
                                                    </ul>
                                                </div>
                                            </Collapse>
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
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "information gain" ? setChosenFeatureValue(null) : setChosenFeatureValue("information gain")} style={{cursor:"pointer"}}>
                                                <b>INFORMATION GAIN = 0.03</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "information gain"}>
                                                <div >
                                                    <ul>

                                                        Information Gain is difference between dataset entropy and average Information Entropy:
                                                        <br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Information gain = H(dataset) - I(Temperature)'
                                                                />
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='Information gain  = 0.9402 - 0.9111 = 0.03'
                                                                />
                                                            </Row>
                                                        </EquationOptions>
                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </Col>

                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

            </Container>
            Let's do this for the rest of the features...<br />
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
    );
}

export default Step5;