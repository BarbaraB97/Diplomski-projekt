import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table, Fade } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';

const Step8 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [open, setOpen] = useState(false);
    const handleTableClick = (feature) => {
        setChosenFeature(feature);
        console.log(feature);
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>3. Which feature do we choose?</h3>
                <hr></hr><br />

                <Row>
                    <Col>
                        <Table bordered hover style={{ heigth: "15em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Information gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr value="Temperature" onClick={(e) => handleTableClick("Temperature")} style={{ backgroundColor: chosenFeature === "Temperature" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Temperature</td>
                                    <td>0.1537</td>
                                </tr>
                                <tr value="Humidity" onClick={(e) => handleTableClick("Humidity")} style={{ backgroundColor: chosenFeature === "Humidity" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Humidity</td>
                                    <td>0.2234</td>
                                </tr>
                                <tr value="Outlook" onClick={(e) => handleTableClick("Outlook")} style={{ backgroundColor: chosenFeature === "Outlook" ? "rgb(197, 235, 202)" : null }}>
                                    <td>Outlook</td>
                                    <td>0.2987</td>
                                </tr>
                                <tr value="Windy" onClick={(e) => handleTableClick("Windy")} style={{ backgroundColor: chosenFeature === "Windy" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Windy</td>
                                    <td>0.0456</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Fade in={chosenFeature === "Outlook"}>
                            <Row>
                                <DecisionTree></DecisionTree>
                            </Row>
                        </Fade>
                    </Col>
                    <Col style={{ textAlign: "left" }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>3. Choose the feature with the highest Information gain</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li>Click on feature with the highest Information gain!</li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                        </Col>
                                    </Row>
                                    <Fade in={chosenFeature === "Outlook"}>
                                        <Row hidden={chosenFeature !== "Outlook"}>
                                            <Col md={9}>
                                                <ul>
                                                    <li>
                                                        Correct! Our root node in the decision tree is feature:
                                                    </li>
                                                </ul>
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <Button style={{ backgroundColor: "#76b5c5", width: "7em" }}>{chosenFeature}</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Fade in={chosenFeature === "Outlook"}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>4. Now we repeat the process for the rest of the nodes in the decision tree</b></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={9}>
                                                <ul>
                                                    <li>
                                                        Choose the node you would like to continue with...
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col md={3} >
                                                <Button style={{ marginRight: "20%", marginLeft: "70%" }}>?</Button>
                                            </Col>
                                        </Row>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            {chosenFeature === "Outlook" ? <p><br />Let's do this for the rest of the nodes...</p> : null}
            < Row >
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(6)}>Last Step</Button>
                </Col>
            </Row >
        </Container >
    );
}

export default Step8;