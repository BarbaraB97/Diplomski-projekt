import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table, Fade, OverlayTrigger, Popover, Card } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const Step6 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [open, setOpen] = useState(false);
    const handleTableClick = (feature) => {
        setChosenFeature(feature);
        console.log(feature);
    }

    return (
        <Container className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col md={8}><h4>3. Step</h4></Col>
                <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
            </Row>
            <hr />
            <Container style={{ paddingBottom: "1em" }}>
                <Row style={{ textAlign: "center" }}>
                    <Card>
                        <Card.Body>
                            Last step is to <b>choose the feature with the highest Information gain </b> which will represent the root node in our decision tree.
                        </Card.Body>
                    </Card>
                </Row>
                <br />
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
                                    <td>0.0292</td>
                                </tr>
                                <tr value="Humidity" onClick={(e) => handleTableClick("Humidity")} style={{ backgroundColor: chosenFeature === "Humidity" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Humidity</td>
                                    <td>0.1518</td>
                                </tr>
                                <tr value="Outlook" onClick={(e) => handleTableClick("Outlook")} style={{ backgroundColor: chosenFeature === "Outlook" ? "rgb(197, 235, 202)" : null }}>
                                    <td>Outlook</td>
                                    <td>0.2467</td>
                                </tr>
                                <tr value="Windy" onClick={(e) => handleTableClick("Windy")} style={{ backgroundColor: chosenFeature === "Windy" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Windy</td>
                                    <td>0.0481</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Fade in={chosenFeature === "Outlook"}>
                            <Row>
                                <DecisionTree width={"35em"} orientation={"vertical"}></DecisionTree>
                            </Row>
                        </Fade>
                    </Col>
                    <Col style={{ textAlign: "left" }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>3. Choose our root node in the Decision tree!</b></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={9}>
                                            <ul>
                                                <li><b>Click</b> on feature with the <b>highest Information gain!</b></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} >
                                            <OverlayTrigger trigger="hover" placement="bottom"
                                                overlay={<Popover id="popover-basic">
                                                    <Popover.Header as="h3">Why?</Popover.Header>
                                                    <Popover.Body>
                                                        Because <b>high Information Gain</b> means maximum reduction of Entropy, which means <b>better data classification</b>
                                                    </Popover.Body>
                                                </Popover>}>
                                                <Button md={3} style={{ marginLeft: "60%" }}>?</Button>
                                            </OverlayTrigger>

                                        </Col>
                                    </Row>
                                    <Fade in={chosenFeature === "Outlook"}>
                                        <Row hidden={chosenFeature !== "Outlook"}>
                                            <Col md={12}>
                                                <ul>
                                                    <li>
                                                        Correct! Our <b>root node</b> in the decision tree is feature:
                                                    </li>


                                                    <OverlayTrigger trigger="hover" placement="bottom"
                                                        overlay={<Popover id="popover-basic">
                                                            <Popover.Header as="h3">Categorical values:</Popover.Header>
                                                            <Popover.Body>
                                                                <ul>
                                                                    <li>Sunny</li>
                                                                    <li>Overcast</li>
                                                                    <li>Rainy</li>
                                                                </ul>
                                                            </Popover.Body>
                                                        </Popover>}>
                                                        <Button md={2} style={{ backgroundColor: "#76b5c5", width: "7em", margin: "1em", marginLeft: "10em" }}>Outlook</Button>
                                                    </OverlayTrigger>

                                                    <li>
                                                        Every link going from root node represents a case when root node takes on certain value. In this case, feature Outlook has 3 different values (Sunny, Overcast, Rainy) that make 3 outgoing links.
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Fade in={chosenFeature === "Outlook"}>
                            <Card>
                                <Card.Body>Now <b>repeat the process for the rest of the nodes</b> in the decision tree.<br /> We will continue with the outgoing link where <b>Outlook: Sunny.</b>
                                    <br /><br/>
                                    <Row>
                                        <Col md={{offset:5}}>
                                            <BsFillArrowRightCircleFill size={45} onClick={props.nextStep} style={{ cursor: "pointer" }}></BsFillArrowRightCircleFill>
                                        </Col>
                                    </Row></Card.Body>
                            </Card>

                        </Fade>
                    </Col>
                </Row>
            </Container>
            {chosenFeature === "Outlook" ? <p>Let's do this for the rest of the nodes...</p> : null}
            < Row >
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(14)}>Last Step</Button>
                </Col>
            </Row >
        </Container >
    );
}

export default Step6;