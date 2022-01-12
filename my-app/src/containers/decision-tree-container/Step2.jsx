import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table } from "react-bootstrap";
import Dataset from '../../components/Dataset'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

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
        if (chosenFeature === feature) {
            setChosenFeature("");
        }
        else {
            setChosenFeature(feature);
        }
    }
    return (
        <Container  className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingBottom: "1em", paddingTop: "1em"  }}>
             <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col><h4>Let's learn about datasets..</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr/>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
               
                <Row>
                    <Col>
                        <Dataset isTableStriped={true} areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted} chosenFeature={chosenFeature}></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        <ul>
                            <li>
                                A dataset is a collection of data.<br />
                            </li>
                            <li>
                                Here we have a small dataset presented in a table. The data was collected by deciding whether it was a good day to play beach volleyball.<br />
                            </li>
                        </ul>

                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => highlightFeatures()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are features?</Accordion.Header>
                                <Accordion.Body><b>Features</b> are distinctive attributes or aspects of something. In the dataset they are represented by columns.<br /><br />
                                    • Outlook <br />• Temperature <br />• Humidty <br />• Windy <br />• Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => setChosenFeatureValue("Play")}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is a label?</Accordion.Header>
                                <Accordion.Body><b>Labels</b> are classifications of records.<br /><br />
                                    • Play <br />
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
                                            <b>Input:</b> Outlook, Temperature, Humidity, Windy
                                        </li>
                                        <li>
                                            <b>Output:</b> Play<br />
                                        </li>
                                    </ul>

                                    IF (<b>Outlook=Sunny</b> && <b>Temperature=Hot</b> && <b>Humidity=High</b> && <b>Windy=false</b>) then outcome of playing beach volleyball is <b>Play=NO</b><br />
                                    <Table striped bordered hover id="weatherTable" style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                                        <thead>
                                            <tr id="features">
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Outlook</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Temperature</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Humidity</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Windy</th>
                                                <th style={{ backgroundColor: "#7EB59A" }}>Play</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>sunny</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>hot</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>high</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>false</td>
                                                <td style={{ backgroundColor: "#7EB59A" }}>no</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What if we have only Input data?</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover id="weatherTable" style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                                        <thead>
                                            <tr id="features">
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Outlook</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Temperature</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Humidity</th>
                                                <th style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>Windy</th>
                                                <th style={{ backgroundColor: "#7EB59A" }}>Play</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>sunny</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>hot</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>high</td>
                                                <td style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>false</td>
                                                <td style={{ backgroundColor: "#7EB59A" }}>???</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    Then we make a prediction of the outcome based on previous data using ID3 algorithm!

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <br /> Let's learn more about ID3 algorithm...
            </Container>
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
    );
}

export default Step2;