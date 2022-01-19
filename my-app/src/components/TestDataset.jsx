import React from 'react'
import { useState } from 'react'
import { Table, Container, Col, Row, Button, Fade, Card } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
const TestDataset = ({ isTableStriped, handleRowData, nextStep }) => {

    const [selectedRowIndex, setSelectedRowIndex] = useState(null)
    const [selectedRowData, setSelectedRowData] = useState(null)
    const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);

    let chosenAnswers = [{ index: 1, chosenAnswer: null },
    { index: 2, chosenAnswer: null },
    { index: 3, chosenAnswer: null },
    { index: 4, chosenAnswer: null },
    { index: 5, chosenAnswer: null }]

    let correctAnswers = ["YES", "YES", "NO", "NO", "YES"]

    const highlightButtonsOnClick = (index, answer) => {
        //update chosen answer
        chosenAnswers.map((chosenAnswer, i) => {
            if (chosenAnswer.index === index) {
                chosenAnswer.chosenAnswer = answer;
                console.log(chosenAnswer.chosenAnswer);
            }
        })

        //highlight correct answer
        if (answer === "NO") {
            document.getElementById(index + "NO").style.backgroundColor = "rgb(100, 185, 204)";
            document.getElementById(index + "YES").style.backgroundColor = "rgb(100, 185, 204, 0.4)";
        }
        else {
            document.getElementById(index + "YES").style.backgroundColor = "rgb(100, 185, 204)";
            document.getElementById(index + "NO").style.backgroundColor = "rgb(100, 185, 204,0.4)";
        }

    }
    const checkAnswers = () => {
        //check if all answers are answered
        /*if (chosenAnswers.filter((answer) => answer.chosenAnswer != null).length < 5) {
            console.log("nisu odg sva pitanja")
            setShowPopover(true)
            return;
        }*/

        let cnt = 0;
        chosenAnswers.filter(chosenAnswer => chosenAnswer.chosenAnswer !== null).forEach((chosenAnswer) => {

            if (chosenAnswer.chosenAnswer === correctAnswers[chosenAnswer.index - 1]) {
                //highlight correct answer
                cnt++;
                document.getElementById(chosenAnswer.index + chosenAnswer.chosenAnswer).style.backgroundColor = "rgb(52, 191, 73, 0.7)";
            }
            else {
                document.getElementById(chosenAnswer.index + chosenAnswer.chosenAnswer).style.backgroundColor = "rgb(255, 76, 76, 0.7)";
            }
        })
        if (cnt === 5) setAllAnswersCorrect(true);
    }

    const handleRowClick = (record, index) => {
        if (index !== undefined) {
            setSelectedRowIndex(index)
            console.log(index)
        }
        if (record !== undefined) {
            setSelectedRowData(record);
            console.log(record)
        }
        handleRowData(record, index)
    };

    let weatherDataset = [
        { outlook: "sunny", temperature: "hot", humidity: "high", windy: "true", play: "NO" },
        { outlook: "overcast", temperature: "hot", humidity: "high", windy: "false", play: "YES" },
        { outlook: "rainy", temperature: "cool", humidity: "normal", windy: "true", play: "YES" },
        { outlook: "sunny", temperature: "cool", humidity: "normal", windy: "false", play: "NO" },
        { outlook: "overcast", temperature: "hot", humidity: "normal", windy: "false", play: "YES" },
    ]

    const generateTable = () => {

        return weatherDataset.map((record, index) => {
            const { outlook, temperature, humidity, windy, play } = record;
            return (
                <tr key={index} onClick={() => handleRowClick(record, index)} className={selectedRowIndex === index ? "tableSelected" : ""} style={{ backgroundColor: selectedRowIndex === index + 1 ? "#7EB59A" : "" }}>
                    <td>{++index}</td>
                    <td >{outlook}</td>
                    <td >{temperature}</td>
                    <td >{humidity}</td>
                    <td >{windy}</td>
                    <td >{play}</td>
                </tr>
            )
        })
    }

    return (<>
        <Row>
            <Col>
                <Table striped={isTableStriped} bordered hover id="weatherTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                    <thead>
                        <tr id="features">
                            <th>#</th>
                            <th >Outlook</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Windy</th>
                            <th>Play</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>

                </Table>
            </Col>
            <Col>
                <Table hover style={{ textAlign: "center" }}>
                    <thead>
                        <tr id="features">
                            <th>Is outcome correct?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Button id="1NO" onClick={() => highlightButtonsOnClick(1, "NO")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", marginRight: "1em", width: "5em" }}>NO</Button>
                            <Button id="1YES" onClick={() => highlightButtonsOnClick(1, "YES")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", width: "5em" }}>YES</Button>
                        </tr>
                        <tr>
                            <Button id="2NO" onClick={() => highlightButtonsOnClick(2, "NO")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", marginRight: "1em", width: "5em" }}>NO</Button>
                            <Button id="2YES" onClick={() => highlightButtonsOnClick(2, "YES")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", width: "5em" }}>YES</Button>
                        </tr>
                        <tr>
                            <Button id="3NO" onClick={() => highlightButtonsOnClick(3, "NO")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", marginRight: "1em", width: "5em" }}>NO</Button>
                            <Button id="3YES" onClick={() => highlightButtonsOnClick(3, "YES")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", width: "5em" }}>YES</Button>
                        </tr>
                        <tr>
                            <Button id="4NO" onClick={() => highlightButtonsOnClick(4, "NO")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", marginRight: "1em", width: "5em" }}>NO</Button>
                            <Button id="4YES" onClick={() => highlightButtonsOnClick(4, "YES")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", width: "5em" }}>YES</Button>
                        </tr>
                        <tr>
                            <Button id="5NO" onClick={() => highlightButtonsOnClick(5, "NO")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", marginRight: "1em", width: "5em" }}>NO</Button>
                            <Button id="5YES" onClick={() => highlightButtonsOnClick(5, "YES")} style={{ backgroundColor: "rgb(100, 185, 204, 0.3)", color: "black", width: "5em" }}>YES</Button>
                        </tr>

                    </tbody>
                </Table>

            </Col>

        </Row>
        <Row>
            <Col md={3}>
                <Button onClick={() => checkAnswers()}>Check answers</Button>
            </Col>
            <Col>
                <Fade in={allAnswersCorrect}>
                    <Row>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <h6>Great job! You answered everything correctly! You can proceed to our next quiz... Good luck! </h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{}}>
                            <br/>
                            <BsFillArrowRightCircleFill size={50} onClick={nextStep} style={{cursor:"pointer"}}></BsFillArrowRightCircleFill>
                        </Col>
                    </Row>

                </Fade>

            </Col>
        </Row>

    </>
    )
}

export default TestDataset;
