import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table } from "react-bootstrap";
import Dataset from '../../components/Dataset'
const Step2 = (props) => {

    const [areFeaturesHighlighted, setHighlightFeatures] = useState(false);
    const [isLabelHighlighted, setHighlightLabel] = useState(false);

    const highlightFeatures = () => {
        setHighlightFeatures(!areFeaturesHighlighted);
    }

    const hightlightLabel = () => {
        setHighlightLabel(!isLabelHighlighted);
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Let's learn about datasets..</h3>
                <hr></hr><br />

                <Row>
                    <Col>
                        <Dataset areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted}></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        A dataset is a collection of data.<br />
                        Here we have a small dataset presented in a table. The data was colleced by deciding whether it was a good day to play beach volleyball.<br /><br />
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => highlightFeatures()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are features?</Accordion.Header>
                                <Accordion.Body>Features are distinctive attributes or aspects of something, in the dataset they are represented by columns.<br /><br />
                                    • Outlook <br />• Temperature <br />• Humidty <br />• Windy <br />• Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => hightlightLabel()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is a label?</Accordion.Header>
                                <Accordion.Body>Labels are classifications of records.<br /><br />
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