import React from 'react'
import { useState } from 'react'
import { Table, Container } from 'react-bootstrap'

const TestDataset = ({ isTableStriped, handleRowData }) => {

    const [selectedRowIndex, setSelectedRowIndex] = useState(1)
    const [selectedRowData, setSelectedRowData] = useState(null)

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
        { outlook: "sunny", temperature: "hot", humidity: "high", windy: "false", play: "no" },
        { outlook: "overcast", temperature: "hot", humidity: "high", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "cool", humidity: "normal", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "mild", humidity: "normal", windy: "false", play: "yes" },
        { outlook: "sunny", temperature: "mild", humidity: "normal", windy: "true", play: "???" },
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
    </>
    )
}

export default TestDataset;
