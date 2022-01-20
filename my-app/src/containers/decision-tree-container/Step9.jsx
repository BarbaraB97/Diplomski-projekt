
import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table, Fade, OverlayTrigger, Popover, Card } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';
import Dataset from '../../components/Dataset'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Blink from 'react-blink-text';
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const Step9 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    const handleTableClick = (feature) => {
        setChosenFeature(feature);
        if (chosenFeature === "Humidity") {
            setChosenFeatureValue("high")
        }
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
                name: "?",
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
        <Container className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col md={8}><h4>3. Step</h4></Col>
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
                <Row style={{ textAlign: "center" }}>
                    <Card>
                        <Card.Body>
                            Last step is to <b>choose the feature with the highest Information gain </b> which will represent the root node in our decision tree.
                        </Card.Body>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Col md={4}>

                        <Table hidden={chosenFeature === "Humidity"} bordered hover style={{ heigth: "15em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Information gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr value="Temperature" onClick={(e) => handleTableClick("Temperature")} style={{ backgroundColor: chosenFeature === "Temperature" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Temperature</td>
                                    <td>0.5710</td>
                                </tr>
                                <tr value="Humidity" onClick={(e) => handleTableClick("Humidity")} style={{ backgroundColor: chosenFeature === "Humidity" ? "rgb(197, 235, 202)" : null }}>
                                    <td>Humidity</td>
                                    <td>0.9710</td>
                                </tr>
                                <tr value="Windy" onClick={(e) => handleTableClick("Windy")} style={{ backgroundColor: chosenFeature === "Windy" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                    <td>Windy</td>
                                    <td>0.02</td>
                                </tr>
                            </tbody>
                        </Table>


                        <Fade in={chosenFeature === "Humidity"}>
                            <Dataset filterByValue={"sunny"} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue} isTableStriped={false} highLightLabelValue={true}></Dataset>

                        </Fade>
                        <Fade in={chosenFeature === "Humidity"}>

                            <Row>
                                <DecisionTree data={TreeData} orientation={"vertical"} width={"45em"} height={"30em"}></DecisionTree>
                            </Row>
                        </Fade>
                    </Col>
                    <Col md={1}></Col>
                    <Col style={{ textAlign: "left" }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>3. Choose our second node in the Decision tree!</b></Accordion.Header>
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
                                    <Fade in={chosenFeature === "Humidity"}>
                                        <Row hidden={chosenFeature !== "Humidity"}>
                                            <Col md={12}>
                                                <ul>
                                                    <li>
                                                        Correct! Our <b>second node</b> in the decision tree is feature:
                                                    </li>


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
                                                        <Button md={2} style={{ backgroundColor: "#76b5c5", width: "7em", margin: "1em", marginLeft: "10em" }}>Humidity</Button>
                                                    </OverlayTrigger>

                                                    <li>
                                                        Now, when we further split the dataset by <b>Humidity</b>, we can see it makes <b>perfect classification</b>.
                                                        When Humidity is High, all outcomes are labeled as NO, and when Humidity is Normal, all outcomes are labeled as YES.
                                                    </li><br />
                                                    <li>
                                                        In case when <text onClick={() => setChosenFeatureValue("high")} style={{ color:"rgb(17, 105, 78)", cursor:"pointer" }}><b>Outlook=Sunny</b> &#38; <b>Humidity=High</b></text>, it is not a good day for playing beach volleyball (<b>NO</b>).<br />
                                                        In case when <text onClick={() => setChosenFeatureValue("normal")} style={{ color:"rgb(17, 105, 78)", cursor:"pointer" }}><b>Outlook=Sunny</b> &#38; <b>Humidity=Normal</b></text>, it is a good day for playing beach volleyball (<b>YES</b>).
                                                    </li><br />
                                                    <li>
                                                        Since we have reached pure leaves, there is no further splitting necessary in this particular branch.
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Fade>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br/>
                        <Fade in={chosenFeature === "Humidity"}>
                            <Card>
                                <Card.Body>Now <b>repeat the process for the rest of the nodes</b> in the decision tree.<br /> We will continue with the outgoing link  <b>Outlook: Overcast.</b>
                                    <br /><br />
                                    <Row>
                                        <Col md={{ offset: 5 }}>
                                            <BsFillArrowRightCircleFill size={45} onClick={props.nextStep} style={{ cursor: "pointer" }}></BsFillArrowRightCircleFill>
                                        </Col>
                                    </Row></Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            {chosenFeature === "Humidity" ? <p><br />Let's do this for the rest of the nodes...</p> : null}
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

export default Step9;