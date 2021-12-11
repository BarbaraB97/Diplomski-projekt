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
        <Container  style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Let's learn about datasets..</h3>
                <hr></hr><br/>

                <Row>
                    <Col>
                        <Dataset areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted}></Dataset>
                    </Col>
                    <Col style={{textAlign:"left"}}>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => highlightFeatures()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are features?</Accordion.Header>
                                <Accordion.Body>•Outlook <br />•Temperature <br />•Humidty <br />•Windy <br />•Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}
                            onClick={() => hightlightLabel()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are labels?</Accordion.Header>
                                <Accordion.Body>•Play <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What does each row in the table represent?</Accordion.Header>
                                <Accordion.Body>
                                    Each row represent combination of input data and its prediciton (output).<br/>
                                    <b>Input:</b> Outlook, Temperature, Humidity i Windy.<br/>
                                    <b>Output:</b> Play<br/><br/>
                                    IF <b>Outlook=Sunny</b> and <b>Temperature=Hot</b> and <b>Humidity=High</b> and <b>Windy=false</b>, then outcome of playing volleyball is <b>Play=NO</b><br/>
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

                    </Col>
                </Row>

            </Container>
            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(3)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step2;