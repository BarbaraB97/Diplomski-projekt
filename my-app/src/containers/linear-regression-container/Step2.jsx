import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table } from "react-bootstrap";
import Dataset from '../../components/Simple_lin_reg_dataset'

const Step2 = (props) => {

    const [areFeaturesHighlighted, setHighlightFeatures] = useState(false);
    const [isLabelHighlighted, setHighlightLabel] = useState(false);
    const [chosenFeature, setChosenFeature] = useState("");

    const highlightFeatures = () => {
        setHighlightFeatures(!areFeaturesHighlighted);
    }

    const hightlightLabel = () => {
        setHighlightLabel(!isLabelHighlighted);
    }

    const setChosenFeatureValue = (feature) => {
        if(chosenFeature===feature){
            setChosenFeature("");
        }
        else{
            setChosenFeature(feature);
        }
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Simple linear regression</h3>
                <hr></hr><br />
  
                <Row>
                    <Col>
                        <Dataset areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted} chosenFeature={chosenFeature}></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                    <b>Simple linear regression</b> is a linear regression model with a single explanatory variable. That is, it concerns two-dimensional sample points 
                    with one independent and one dependent variable and finds a linear function that, 
                    as accurately as possible, predicts the dependent variable values as a function of the independent variable.<br /><br />
                    
                    <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => setChosenFeatureValue("Price")}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are input/independent variables?</Accordion.Header>
                                <Accordion.Body>
                                    • Price (in thousands $) <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => setChosenFeatureValue("Size")}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is an output/dependent variable?</Accordion.Header>
                                <Accordion.Body>
                                    • Size (Square meters) <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What does each row in the table represent?</Accordion.Header>
                                <Accordion.Body>
                                    Each row represents one <b>record</b>: combination of input data and its prediciton (output).<br />
                                    <ul>
                                        <li>
                                            <b>Input:</b> Price
                                        </li>
                                        <li>
                                            <b>Output:</b> Size <br />
                                        </li>
                                    </ul>

                                    IF <b>Price=200</b> then <b>Size=25</b><br />
                                    <Table striped bordered hover id="simpleRegressionTable" style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                                        <thead>
                                            <tr id="features">
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Price (in thousands $)</th>
                                                <th style={{ backgroundColor: "#7EB59A" }}>Size  (Square meters)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>200</td>
                                                <td style={{ backgroundColor: "#7EB59A" }}>25</td>
                                            </tr>
                                        </tbody>
                                    </Table>

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
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(5)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step2;