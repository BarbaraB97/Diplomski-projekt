import { useState } from "react";
import { Container, Row, Button, Col, Accordion, OverlayTrigger, Popover, Collapse, Card } from "react-bootstrap";
import { Equation, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'
import Dataset from '../../components/Dataset'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Blink from 'react-blink-text';

const Step7 = (props) => {

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
            <Container className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4>1. Step</h4></Col>

                    <OverlayTrigger trigger="hover" placement="bottom"
                        overlay={<Popover id="popover-basic">
                            <Popover.Header as="h3">Skip calculation</Popover.Header>
                            <Popover.Body>
                                You can skip the rest of the calculation and go straight to solving few exercises to check your knowledge!
                            </Popover.Body>
                        </Popover>}>
                        <Button onClick={() => props.goToStep(14)} style={{ width: "6em", backgroundColor: "rgb(277,277,277)", border: "1px solid black", marginRight: "1em" }}>
                            <Blink text='Skip' fontSize='20'>
                                Skip
                            </Blink>
                        </Button>
                    </OverlayTrigger>

                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)", marginRight: "1em" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button>
                </Row>
                <hr />
                <Container style={{ paddingBottom: "1em" }}>
                    <Row style={{textAlign:"left"}}>
                        <Card>
                            <Card.Body>
                                We filtered the dataset so we can calculate entropy for cases when <b>Outlook==Sunny. </b>
                                Now, repeat the proceedure and compute entropy for filtered dataset..
                            </Card.Body>
                        </Card>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Dataset filterByValue={"sunny"} isTableStriped={false} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue}></Dataset>
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <Accordion defaultActiveKey="0"
                                style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>1. Compute the entropy for whole dataset:</b></Accordion.Header>
                                    <Accordion.Body>
                                        <li class="list-group-item">
                                            <ol>Dataset entropy = <b>0.9710</b>  <Button onClick={() => handleClick(!show)} style={{ marginRight: "1em", marginLeft: "16em" }}>?</Button></ol>
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
                                                        <li>Out of <b>5</b> instances, <b>2</b> are classified as <b>YES</b> and <b>3</b> are classified as <b>NO</b> </li><br />
                                                        <EquationOptions>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(YES) = 2/5'
                                                                    /> 	&#32;
                                                                </Col>
                                                                <Col>
                                                                    <Equation
                                                                        variables={defaultVariables}
                                                                        functions={defaultFunctions}
                                                                        value='P(NO) = 3/5'
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
                                                                    value='H(dataset) =(-1)* 2/5*log2(2/5) - 3/5*log2(3/5)'
                                                                />
                                                                <Equation
                                                                    variables={defaultVariables}
                                                                    functions={defaultFunctions}
                                                                    value='H(dataset) = 0.9710'
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
                        

                        </Col>
                    </Row>
                </Container>
                {chosenFeature ? <p>Now, let's calculate information gain for the rest of the features... </p> : null}

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

export default Step7;