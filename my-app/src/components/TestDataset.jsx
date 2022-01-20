import React from 'react'
import { useState } from 'react'
import { Table, Col, Row, Button, Fade, Card } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { Checkbox } from "@mui/material"
const TestDataset = ({ isTableStriped, handleRowData, nextStep }) => {

    const [selectedRowIndex, setSelectedRowIndex] = useState(null)
    const [selectedRowData, setSelectedRowData] = useState(null)
    const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);
    const [checkedAnswers, setCheckedAnswers] = useState([false, false, false, false, false])
    let chosenAnswers = [{ index: 1, chosenAnswer: null },
    { index: 2, chosenAnswer: "" },
    { index: 3, chosenAnswer: "" },
    { index: 4, chosenAnswer: "" },
    { index: 5, chosenAnswer: "" }]
    let correctAnswers = [true, true, false, false, true]

    const updateCheckboxes = (index, isChecked) => {
        let arr = checkedAnswers;
        arr[index-1] = isChecked
        setCheckedAnswers(arr);
        console.log(arr)
    }


    const checkAnswers = () => {
        let cnt = 0;
        for(var i =0; i<5; i++){
            if(checkedAnswers[i]===correctAnswers[i]){
                cnt++;
            }
        }
        if (cnt === 5) setAllAnswersCorrect(true);
        console.log(cnt)
    }

    const handleRowClick = (record, index) => {
        if (index !== undefined) {
            setSelectedRowIndex(index)
        }
        if (record !== undefined) {
            setSelectedRowData(record);
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
                    <td> <Checkbox id={index} onClick={(event) => updateCheckboxes(index, event.target.checked)}></Checkbox></td>
                </tr>
            )
        })
    }

    return (<>
        <Row>

            <Col>
                <Table striped={isTableStriped} bordered hover id="weatherTable" style={{ heigth: "35em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                    <thead>
                        <tr id="features">
                            <th>#</th>
                            <th >Outlook</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Windy</th>
                            <th>Play</th>
                            <th>Is correct?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>

                </Table>
            </Col>

        </Row>
        <Row>
            <Col md={3}>
                <Button style={{ backgroundColor: "#76b5c5" }} onClick={() => checkAnswers()}>Check answers</Button>
            </Col>
            <Col>
                <Fade in={allAnswersCorrect}>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Body>
                                    <h6>Great job! You answered everything correctly! You can proceed to our next quiz... Good luck! </h6>
                                    <BsFillArrowRightCircleFill size={50} onClick={nextStep} style={{ cursor: "pointer" }}></BsFillArrowRightCircleFill>
                                </Card.Body>

                            </Card>
                        </Col>

                    </Row>

                </Fade>

            </Col>
        </Row>

    </>
    )
}

export default TestDataset;
