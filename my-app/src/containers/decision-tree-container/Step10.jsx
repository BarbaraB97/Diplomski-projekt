import { useState } from "react";
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'

const Step10 = (props) => {

    const [chosenFeature, setChosenFeature] = useState("Temperature");
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>2. Let's calculate entropy for feature: TEMPERATURE </h3>
                <hr></hr><br />

                <Row>
                    <Col md={4}>
                        <ul style={{textAlign:"left"}} >
                            <li>
                            <p>We filtered the dataset so we can calculate entropy for cases when <b>Outlook==Sunny:</b></p>

                            </li>
                        </ul>
                        <Dataset filterByValue={"sunny"} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue} isTableStriped={false} highLightLabelValue={true}></Dataset>
                    </Col>
                    <Col md={1}></Col>
                    <Col style={{ textAlign: "left" }} md={7}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>1. Calculate entropy for all categorical values:</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={12}>
                                            <ul onClick={() => chosenFeatureValue === "hot" ? setChosenFeatureValue(null) : setChosenFeatureValue("hot")} style={{ cursor: "pointer" }}>
                                                <b >HOT</b>: Entropy = <b>0.0</b><hr />
                                            </ul>

                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "hot"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>2</b> outcomes in case when <b>Temperature=Hot</b>:<br /> <b>0</b> are labeled as <b>YES</b> and <b>2</b> as <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 0'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 2/2  = 1'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Hot) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Hot) = (-1)* (0)*log2(0) - 1*log2(1)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Hot) = 0'
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
                                            <ul onClick={() => chosenFeatureValue === "mild" ? setChosenFeatureValue(null) : setChosenFeatureValue("mild")} style={{ cursor: "pointer" }}>
                                                <b>MILD</b>: Entropy = <b>1.0</b><hr />
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "mild"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>2</b> outcomes in case when <b>Temperature=Mild</b>:<br /> <b>1</b> is labeled as <b>YES</b> and <b>1</b> as <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 1/2'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 1/2'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Mild) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Mild) = (-1)* (1/2)*log2(1/2) - 1/2*log2(1/2)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Mild) = 1.0'
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
                                            <ul onClick={() => chosenFeatureValue === "cool" ? setChosenFeatureValue(null) : setChosenFeatureValue("cool")} style={{ cursor: "pointer" }}>
                                                <b>COOL</b>: Entropy = <b>0.0</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "cool"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Out of <b>1</b> outcomes in case when <b>Temperature=Cool</b>:<br /> <b>1</b> is labeled as <b>YES</b> and <b>0</b> as <b>NO</b>:
                                                        </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 1'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 0'
                                                                    />
                                                                </Col>
                                                            </Row><br />
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Cool) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Cool) = (-1)* (1)*log2(1) - 0*log2(0)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(Temperature=Cool) = 0'
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
                                            <ul onClick={() => chosenFeatureValue === "avg entropy" ? setChosenFeatureValue(null) : setChosenFeatureValue("avg entropy")} style={{ cursor: "pointer" }}>
                                                <b>AVG. INFORMATION ENTROPY = 0.4</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "avg entropy"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Average Information entropy:
                                                        </li>
                                                        <Row>
                                                            <Col md={{ offset: 3 }}>
                                                                <EquationOptions>

                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='I(X) = sum(x,X,3, P(x)*H(x))'
                                                                    />
                                                                    <br />
                                                                </EquationOptions>
                                                            </Col>
                                                        </Row>
                                                        <li>
                                                            <b>X</b> = set of values that feature X takes on, ex. Temperature = &#123; Hot, Mild, Cool &#125;
                                                        </li>
                                                        <li>
                                                            <b>P(x)</b>= possibility of feature X to take on value x<br />
                                                        </li>
                                                        <li>
                                                            <b>H(x)</b>= entropy of feature X with value x
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
                                                                    value='I(Temperature) = 2/5*0 + 2/5*1 + 1/5*0'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='I(Temperature) = 0.4'
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
                                            <ul onClick={() => chosenFeatureValue === "information gain" ? setChosenFeatureValue(null) : setChosenFeatureValue("information gain")} style={{ cursor: "pointer" }}>
                                                <b>INFORMATION GAIN = 0.5710</b>
                                            </ul>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "information gain"}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Information Gain is <b>difference</b> between <b>Dataset Entropy</b> and <b>Average Information Entropy</b> of the feature:

                                                        </li>
                                                        <br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={{ offset: "2" }}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='IG(X) = H(dataset) - I(X)'
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            <li>
                                                                <b>X</b> = Feature
                                                            </li>
                                                            <li>
                                                                <b>I(X)</b> = Average Information entropy
                                                            </li>
                                                            <li>
                                                                <b>H(dataset)</b> = Dataset entropy
                                                            </li><br/>
                                                            <Row>
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='IG(Temperature)  = 0.9710 - 0.4 = 0.5710'
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

export default Step10;