
//Outlook==Overcast
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse, Fade } from "react-bootstrap";
import { useState } from "react";
import { Equation, EquationOptions, defaultErrorHandler } from 'react-equation'
import DecisionTree from '../../components/DecisionTree';
import { defaultVariables, defaultFunctions } from 'equation-resolver'
import Dataset from '../../components/Dataset'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step10 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [show, setShow] = useState(false);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);


    const handleClick = () => {
        show ? setChosenFeature(null) : setChosenFeature("Play");
        chosenFeatureValue ? setChosenFeatureValue(null) : setChosenFeatureValue("yes");
        setShow(!show);
    }

    const TreeData = {
        name: 'Outlook',
        children: [
            {
                name: '?',
                attributes: {
                    "Outlook": "Rainy"
                }
            },
            {
                name: "YES",
                attributes: {
                    "Outlook": "Overcast"
                },
            },
            {
                name: "Humidity",
                attributes: {
                    "Outlook": "Sunny"
                },
                children: [
                    {
                        name: "YES",
                        attributes: {
                            "Humidity": "Normal"
                        },
                    },
                    {
                        name: "NO",
                        attributes: {
                            "Humidity": "High"
                        },
                    }
                ]
            }
        ],
    };


    return (
        <>
            <Container style={{ width: '80em', background: 'rgb(252, 249, 242)',  paddingBottom: "1em", paddingTop:"1em" }}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4><b>1.</b> Compute dataset entropy when <b>Outlook=Overcast</b></h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr />
                <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>

                    <Row>

                        <Col>
                            <ul style={{ textAlign: "left" }} >
                                <p>We filtered the dataset so we can calculate entropy for cases when <b>Outlook==Overcast:</b></p>


                            </ul>
                            <Dataset filterByValue={"overcast"} isTableStriped={false} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue}></Dataset>

                            <Fade in={true}>
                                <Row>
                                    <DecisionTree data={TreeData}></DecisionTree>
                                </Row>
                            </Fade>
                        </Col>

                        <Col style={{ textAlign: "left" }}>
                            <Accordion defaultActiveKey="0"
                                style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>1. Compute the entropy for whole dataset:</b></Accordion.Header>
                                    <Accordion.Body>
                                        <li class="list-group-item">
                                            <ol>Dataset entropy = <b>0.0</b>  <Button onClick={() => handleClick(!show)} style={{ marginRight: "1em", marginLeft: "16em" }}>?</Button></ol>
                                        </li>
                                        <Row>
                                            <Collapse style={{ marginLeft: "2em", marginRight: "2em" }} in={show}>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            Right from the filtered table we can see that all outcomes are <b>YES</b>. This automatically means that the entropy will be 0.
                                                        </li>
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
                                                        <li>Out of <b>5</b> instances, <b>5</b> are classified as <b>YES</b> and <b>0</b> are classified as <b>NO</b> </li><br />
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
                                                                    value='H(dataset) = (-1)*P(YES) * log2(P(YES)) - P(NO)*log2(P(NO))'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) =(-1)* 1*log2(1) - 0*log2(0)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) = 0.0'
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
                                    <Accordion.Header><b>Zero entropy? What does this mean?</b></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <div >
                                                <ul>
                                                    <li>
                                                        Zero entropy means perfect knowledge of a state.
                                                    </li>
                                                    <li>
                                                        This means we are certain of the outcome &rarr; this node is a leaf.
                                                    </li>
                                                    <li>
                                                        To conclude, if <button onClick={() => setChosenFeatureValue("overcast")} style={{ backgroundColor: "rgb(218, 242, 223)" }}><b>Outlook=Overcast</b></button> , it is a good day for playing beach volleyball (<b>YES</b>).<br />
                                                    </li>
                                                </ul>
                                            </div>
                                        </Row>


                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Col>
                    </Row>




                </Container>

                {chosenFeature !== null ? <p><br />Let's do this for the remaining node...</p> : null}
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

        </>);
}

export default Step10;