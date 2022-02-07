import { useState } from "react";
import { Button, Col, Container, Row, Fade, Table, Form, Collapse, Card } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';
import TestDataset from '../../components/TestDataset';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step14 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);
    const [rowData, setRowData] = useState({ outlook: "sunny", temperature: "hot", humidity: "high", windy: "false", play: "no" })
    const [rowIndex, setRowIndex] = useState(1)
    const [rowChecked, setRowChecked] = useState(["", "", "", "", ""])


    const handleRowData = (record, index) => {
        setRowData(record);
        setRowIndex(index);
        console.log(rowChecked)

    }


    const TreeData = {
        name: 'Outlook',
        children: [
            {
                name: "Windy",
                attributes: {
                    "Outlook": "Rainy"
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
            <Container className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4>Good job! We have finished our Decision tree!</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr />
                <Container style={{ paddingBottom: "2em" }}>

                    <Row>
                        <Card>
                            <Card.Body>
                                From the dataset in the beggining, we've created a Decision Tree using ID3 algorithm. Now, let's test your knowledge...
                                For each row in the table check the checkbox if you think that <b>given outcome is correct.</b> Use our decision tree as a guide.
                                <b> Check</b> your answers afterwards to see how much you've learned. Good luck!
                            </Card.Body>
                        </Card>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={6}>
                            <DecisionTree data={TreeData} orientation={"vertical"} width={600} heigth={500}></DecisionTree>
                        </Col>
                        <Col md={6}>
                            <TestDataset handleRowData={handleRowData} nextStep={() => props.nextStep()}></TestDataset>
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

export default Step14;