import { useState } from "react";
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'

const Step8 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    const chooseFeature = (feature) => {
        setChosenFeature(feature);
        setChosenFeatureValue(null);
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>2. Let's calculate information gain for the rest of the features..</h3>
                <hr></hr><br />

                <Row>
                    <Col md={4}>
                        <ul style={{ textAlign: "left" }} >
                            <li>
                                <p>We filtered the dataset so we can calculate entropy for cases when <b>Outlook==Sunny:</b></p>

                            </li>
                        </ul>
                        <Dataset filterByValue={"sunny"} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue} isTableStriped={false} highLightLabelValue={true}></Dataset>
                    </Col>
                    <Col md={1}></Col>
                    <Col style={{ textAlign: "left" }} md={7}>
                        <div style={{ textAlign: "center" }}>
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
                                            <li>False</li>
                                            <li>True</li>
                                        </ul>
                                    </Popover.Body>
                                </Popover>}>
                                <Button onClick={() => chooseFeature("Windy")} md={3} style={{ backgroundColor: chosenFeature === "Windy" ? "#eab676" : "#76b5c5", marginRight: "1em", width: "7em" }}>Windy</Button>
                            </OverlayTrigger>
                        </div><br />

                        <div id="TemperatureEntropyCalculation" hidden={chosenFeature != "Temperature"}>
                            <Accordion defaultActiveKey="0" >
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
                                                <ul onClick={() => chosenFeatureValue === "avg entropy humidity" ? setChosenFeatureValue(null) : setChosenFeatureValue("avg entropy humidity")} style={{ cursor: "pointer" }}>
                                                    <b>AVG. INFORMATION ENTROPY = 0.4</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "avg entropy humidity"}>
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
                                                <ul onClick={() => chosenFeatureValue === "information gain temperature" ? setChosenFeatureValue(null) : setChosenFeatureValue("information gain temperature")} style={{ cursor: "pointer" }}>
                                                    <b style={{backgroundColor:"#7EB59A"}}>INFORMATION GAIN = 0.5710</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "information gain temperature"}>
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
                                                                </li><br />
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
                        </div>
                        <div id="HumidityEntropyCalculation" hidden={chosenFeature != "Humidity"}>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>1. Calculate entropy for all categorical values:</b></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={12}>
                                                <ul onClick={() => chosenFeatureValue === "high" ? setChosenFeatureValue(null) : setChosenFeatureValue("high")} style={{ cursor: "pointer" }}>
                                                    <b >HIGH</b>: Entropy = <b>0.0</b><hr />
                                                </ul>

                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "high"}>
                                                    <div >
                                                        <ul>
                                                            <li>
                                                                Out of <b>3</b> outcomes in case when <b>Humidity=High</b>:<br /> <b>0</b> are labeled as <b>YES</b> and <b>3</b> as <b>NO</b>:
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
                                                                            value='P(NO) = 1'
                                                                        />
                                                                    </Col>
                                                                </Row><br />
                                                                <Row>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Humidity=High) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Humidity=High) = (-1)* (0)*log2(0) - 1*log2(1)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Humidity=High) = 0.0'
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
                                                <ul onClick={() => chosenFeatureValue === "normal" ? setChosenFeatureValue(null) : setChosenFeatureValue("normal")} style={{ cursor: "pointer" }}>
                                                    <b>NORMAL</b>: Entropy = <b>0.0</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "normal"}>
                                                    <div >
                                                        <ul>
                                                            <li>
                                                                Out of <b>2</b> outcomes in case when <b>Humidity=Normal</b>:<br /> <b>2</b> are labeled as <b>YES</b> and <b>0</b> as <b>NO</b>:
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
                                                                        value='H(Humidity=Normal) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Humidity=Normal) = (-1)* (1/2)*log2(1/2) - 1/2*log2(1/2)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Humidity=Normal) = 0.0'
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
                                                <ul onClick={() => chosenFeatureValue === "avg entropy humidity" ? setChosenFeatureValue(null) : setChosenFeatureValue("avg entropy humidity")} style={{ cursor: "pointer" }}>
                                                    <b>AVG. INFORMATION ENTROPY = 0.0</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "avg entropy humidity"}>
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
                                                                <b>X</b> = set of values that feature X takes on, ex. Humidity = &#123; High, Normal &#125;
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
                                                                        value='I(Humidity) = P(High)*H(High) + P(Normal)*H(Normal)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='I(Humidity) = 3/5*0 + 2/5*0'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='I(Humidity) = 0.0'
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
                                                <ul onClick={() => chosenFeatureValue === "information gain humidity" ? setChosenFeatureValue(null) : setChosenFeatureValue("information gain humidity")} style={{ cursor: "pointer" }}>
                                                    <b style={{backgroundColor:"#7EB59A"}}>INFORMATION GAIN = 0.9710</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "information gain humidity"}>
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
                                                                </li><br />
                                                                <Row>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='IG(Humidity)  = 0.9710 - 0.0 = 0.9710'
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
                        </div>
                        <div id="WindyEntropyCalculation" hidden={chosenFeature != "Windy"}>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>1. Calculate entropy for all categorical values:</b></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={12}>
                                                <ul onClick={() => chosenFeatureValue === "false" ? setChosenFeatureValue(null) : setChosenFeatureValue("false")} style={{ cursor: "pointer" }}>
                                                    <b >FALSE</b>: Entropy = <b>0.9183</b><hr />
                                                </ul>

                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "false"}>
                                                    <div >
                                                        <ul>
                                                            <li>
                                                                Out of <b>3</b> outcomes in case when <b>Windy=False</b>:<br /> <b>1</b> is labeled as <b>YES</b> and <b>2</b> as <b>NO</b>:
                                                            </li><br />
                                                            <EquationOptions>
                                                                <Row>
                                                                    <Col md={3}>
                                                                        <Equation
                                                                            variables={defaultVariables}
                                                                            functions={defaultFunctions}
                                                                            value='P(YES) = 1/3'
                                                                        /> 	&#32;
                                                                    </Col>
                                                                    <Col>
                                                                        <Equation
                                                                            variables={defaultVariables}
                                                                            functions={defaultFunctions}
                                                                            value='P(NO) = 2/3'
                                                                        />
                                                                    </Col>
                                                                </Row><br />
                                                                <Row>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Windy=False) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Windy=False) = (-1)* (1/3)*log2(1/3) - 2/3*log2(2/3)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Windy=False) = 0.9183'
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
                                                <ul onClick={() => chosenFeatureValue === "true" ? setChosenFeatureValue(null) : setChosenFeatureValue("true")} style={{ cursor: "pointer" }}>
                                                    <b>TRUE</b>: Entropy = <b>1.0</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em", border: "1px grey solid", backgroundColor: "rgb(213, 213, 213, 0.3)" }} in={chosenFeatureValue === "true"}>
                                                    <div >
                                                        <ul>
                                                            <li>
                                                                Out of <b>2</b> outcomes in case when <b>Windy=True</b>:<br /> <b>1</b> is labeled as <b>YES</b> and <b>1</b> as <b>NO</b>:
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
                                                                        value='H(Windy=True) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Windy=True) = (-1)* (1/2)*log2(1/2) - 1/2*log2(1/2)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='H(Windy=True) = 1.0'
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
                                                <ul onClick={() => chosenFeatureValue === "avg entropy windy" ? setChosenFeatureValue(null) : setChosenFeatureValue("avg entropy windy")} style={{ cursor: "pointer" }}>
                                                    <b>AVG. INFORMATION ENTROPY = 0.9510</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "avg entropy windy"}>
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
                                                                <b>X</b> = set of values that feature X takes on, ex. Windy = &#123; False, True &#125;
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
                                                                        value='I(Windy) = P(Hot)*H(Hot) + P(Mild)*H(Mild) + P(Cool)*H(Cool)'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='I(Windy) = 3/5*0.9183 + 2/5*1.0'
                                                                    />
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='I(Windy) = 0.9510'
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
                                                <ul onClick={() => chosenFeatureValue === "information gain Windy" ? setChosenFeatureValue(null) : setChosenFeatureValue("information gain Windy")} style={{ cursor: "pointer" }}>
                                                    <b style={{backgroundColor:"#7EB59A"}}>INFORMATION GAIN = 0.02</b>
                                                </ul>
                                                <Collapse style={{ marginLeft: "2em", marginRight: "2em", backgroundColor: "rgb(213, 213, 213, 0.3)", border: "1px grey solid" }} in={chosenFeatureValue === "information gain Windy"}>
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
                                                                </li><br />
                                                                <Row>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='IG(Windy)  = 0.9710 - 0.9510 = 0.02'
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
                        </div>


                    </Col>
                </Row>

            </Container>
            Now choose feature with the highest Information gain...<br />
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
    );
}

export default Step8;