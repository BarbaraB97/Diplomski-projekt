import { useState } from "react";
import { Button, Col, Container, Row, Fade, Table, Form, Collapse } from "react-bootstrap";
import DecisionTree from '../../components/DecisionTree';
import TestDataset from '../../components/TestDataset';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step14 = (props) => {

    const [chosenFeature, setChosenFeature] = useState(null);
    const [chosenFeatureValue, setChosenFeatureValue] = useState(null);
    const [rowData, setRowData] = useState({ outlook: "sunny", temperature: "hot", humidity: "high", windy: "false", play: "no" })
    const [rowIndex, setRowIndex] = useState(1)
    const [rowChecked, setRowChecked] = useState(["","","","",""])
    const [readyToCheck, setReadyToCheck] = useState(null);
    const [text, setText] = useState(null)
    const [incorrect, setIncorrect] = useState([0,0,0,0,0])
    const [incorrectNo, setIncorrectNo] = useState(0)

    const handleTableClick = (feature) => {
        setChosenFeature(feature);
        if (chosenFeature === "Windy") {
            setChosenFeatureValue("high")
        }
    }

    const handleRowData = (record, index) => {
        setRowData(record);
        setRowIndex(index);
        console.log(rowChecked)

    }

    const handleCheckboxChange = () => {
        let c = rowChecked
        c[rowIndex-1] = rowChecked[rowIndex-1] === "" ? "1" : ""
        setRowChecked(c)
        handleRowData(rowData, rowIndex)
        console.log(rowIndex)
        console.log(rowChecked)
    }

    const checkTheTable = () => {
        setReadyToCheck("ready")
        let inc = 0
        let correct = ["","1","","1","1"]
        let incorrect_ = [0,0,0,0,0]
        for (let i=0; i < 5; i++){
            if (rowChecked[i] !== correct[i]) {
                inc += 1
                incorrect_[i] = 1
            }
        }
        if (inc === 0){
            setText("Correct!")
        } else {
            setText("Incorrect! You have "+inc+" wrong answers. Try again")
        }
        setIncorrect(incorrect_)
        setIncorrectNo(inc)

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
            <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em", paddingTop: "1em" }}>
                <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col md={8}><h4>Good job! We have finished our Decision tree!</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr />
                <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>

                    <Row>
                        <Col md={5} style={{ textAlign: "left" }}>
                            <ul>
                                <li>
                                    From the dataset in the beggining, we've created a Decision Tree using ID3 algorithm.
                                </li>
                                <li>
                                    Now, let's test our model..
                                </li>
                                <li>
                                    <b>Click</b> on every row and <b>check</b> if the value of feature "Play" matches with the one we predicted using our Decision tree model!
                                </li>
                                <li>
                                    For the last row mark Outcome as <b>YES</b> by checking the box or <b>NO</b> by leaving it unchecked
                                </li>
                            </ul>
                            <DecisionTree data={TreeData}></DecisionTree>

                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <Row>
                                <Col sm={{ offset: 1 }}>
                                    <TestDataset handleRowData={handleRowData}></TestDataset>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ offset: 1 }}>
                                    <Table bordered hover style={{ backgroundColor: "rgb(190, 214, 220)", width: "35em" }}>
                                        <tbody>
                                            <tr>
                                                <td>{rowIndex}</td>
                                                <td>{rowData.outlook}</td>
                                                <td>{rowData.temperature}</td>
                                                <td>{rowData.humidity}</td>
                                                <td>{rowData.windy}</td>
                                                <td>{rowData.play}</td>
                                                <td><Form><Form.Check type="checkbox" checked={rowChecked[rowIndex-1]} onChange={handleCheckboxChange} label="Is Prediction Right?" /></Form></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ offset: 1 }}>
                                    <Button onClick={checkTheTable}>Check</Button>
                                </Col>
                            </Row>
                            <Fade in={readyToCheck === "ready"}>
                                <Row>
                                    <Col sm={{ offset: 1 }} style={{position: "center"}}>
                                        <br/>
                                        <Collapse in={incorrectNo === 0}>
                                            <p><Button style={{ color: "black", background: "transparent", borderColor: "rgb(0, 102, 0)" }}><b>Correct!!!</b></Button></p>
                                        </Collapse>
                                        <Collapse in={incorrectNo > 0}>
                                            <p><Button style={{ color: "black", background: "transparent", borderColor: "rgb(255, 153, 153)" }}><b>Incorrect!!!</b></Button>
                                                <br/> <br/>
                                                You have {incorrectNo} wrong answers!
                                            </p>
                                        </Collapse>
                                    </Col>
                                </Row>
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

export default Step14;