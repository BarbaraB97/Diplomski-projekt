
//Outlook==Rainy
import { useState } from "react";
import { Container, Row, Button, Col, Accordion, Table, Fade, OverlayTrigger, Popover } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';
import Dataset from '../../components/Dataset'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step13 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);

    const handleTableClick = (feature) => {
        setChosenFeature(feature);
        if (chosenFeature === "Windy") {
            setChosenFeatureValue("high")
        }
    }

    const TreeData = {
        name: 'Outlook',
        children: [
            {
                name: "Windy",
                attributes: {
                    "Outlook": "Sunny"
                },
                children: [
                    {
                        name: "YES",
                        attributes: {
                            "Windy": "False"
                        },
                    },
                    {
                        name: "NO",
                        attributes: {
                            "Windy": "True"
                        },
                    }
                ]
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
            <Container  className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)' , paddingBottom: "1em", paddingTop: "1em" }}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4><b>3.</b> Choose the feature with the highest Information gain</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr />
                <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>

                    <Row>
                        <Col md={4}>

                            <Table hidden={chosenFeature === "Windy"} bordered hover style={{ heigth: "15em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Information gain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr value="Temperature" onClick={(e) => handleTableClick("Temperature")} style={{ backgroundColor: chosenFeature === "Temperature" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                        <td>Temperature</td>
                                        <td>0.02</td>
                                    </tr>
                                    <tr value="Humidity" onClick={(e) => handleTableClick("Humidity")} style={{ backgroundColor: chosenFeature === "Humidity" ? "rgb(237, 102, 102, 0.5)" : null }}>
                                        <td>Humidity</td>
                                        <td>0.02</td>
                                    </tr>
                                    <tr value="Windy" onClick={(e) => handleTableClick("Windy")} style={{ backgroundColor: chosenFeature === "Windy" ? "rgb(197, 235, 202)" : null }}>
                                        <td>Windy</td>
                                        <td>0.9710</td>
                                    </tr>
                                </tbody>
                            </Table>


                            <Fade in={chosenFeature === "Windy"}>
                                <Dataset filterByValue={"rainy"} chosenFeature={chosenFeature} chosenFeatureValue={chosenFeatureValue} isTableStriped={false} highLightLabelValue={true}></Dataset>

                            </Fade>
                            <Fade in={chosenFeature === "Windy"}>

                                <Row>
                                    <DecisionTree data={TreeData}></DecisionTree>
                                </Row>
                            </Fade>
                        </Col>
                        <Col md={1}></Col>
                        <Col style={{ textAlign: "left" }}>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Choose our last node in decision tree!</b></Accordion.Header>
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
                                        <Fade in={chosenFeature === "Windy"}>
                                            <Row hidden={chosenFeature !== "Windy"}>
                                                <Col md={12}>
                                                    <ul>
                                                        <li>
                                                            Correct! Our <b>last node</b> in the decision tree is feature:
                                                        </li>


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
                                                            <Button md={2} style={{ backgroundColor: "#eab676", width: "7em", margin: "1em", marginLeft: "10em" }}>Windy</Button>
                                                        </OverlayTrigger>

                                                        <li>
                                                            Now, when we further split the dataset by <b>Windy</b>, we can see it makes <b>perfect classification</b>.
                                                            When Windy is False, all outcomes are labeled as YES, and when Windy is True, all outcomes are labeled as NO.
                                                        </li><br />
                                                        <li>
                                                            In case when <button onClick={() => setChosenFeatureValue("false")} style={{ backgroundColor: "rgb(218, 242, 223)" }}><b>Outlook=Rainy</b> &#38; <b>Windy=False</b></button>, it is a good day for playing beach volleyball (<b>YES</b>).<br />
                                                            In case when <button onClick={() => setChosenFeatureValue("true")} style={{ backgroundColor: "rgb(218, 242, 223)" }}><b>Outlook=Rainy</b> &#38; <b>Windy=True</b></button>, it is not a good day for playing beach volleyball (<b>NO</b>).
                                                        </li>

                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Fade>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Fade in={chosenFeature === "Windy"}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><b>4. The tree is now finished and ready for prediction</b></Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col md={9}>
                                                    <ul>
                                                        <li>
                                                            We have reached pure leaves and can now predict the outcome
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

export default Step13;