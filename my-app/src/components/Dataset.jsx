import React from 'react'
import { Table } from 'react-bootstrap'

const Dataset = ({ areFeaturesHighlighted, isLabelHighlighted }) => {

    const weatherDataset = [
        { outlook: "sunny", temperature: "hot", humidity: "high", windy: "false", play: "no" },
        { outlook: "sunny", temperature: "hot", humidity: "high", windy: "true", play: "no" },
        { outlook: "overcast", temperature: "hot", humidity: "high", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "mild", humidity: "high", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "cool", humidity: "normal", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "cool", humidity: "normal", windy: "true", play: "no" },
        { outlook: "overcast", temperature: "cool", humidity: "normal", windy: "true", play: "yes" },
        { outlook: "sunny", temperature: "mild", humidity: "high", windy: "false", play: "no" },
        { outlook: "sunny", temperature: "cool", humidity: "normal", windy: "false", play: "yes" },
        { outlook: "rainy", temperature: "mild", humidity: "normal", windy: "false", play: "yes" },
        { outlook: "sunny", temperature: "mild", humidity: "normal", windy: "true", play: "yes" },
        { outlook: "overcast", temperature: "mild", humidity: "high", windy: "true", play: "yes" },
        { outlook: "overcast", temperature: "hot", humidity: "normal", windy: "false", play: "yes" },
    ]

    const generateTable = () => {
        return weatherDataset.map((record, index) => {
            const { outlook, temperature, humidity, windy, play } = record;
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td>{outlook}</td>
                    <td>{temperature}</td>
                    <td>{humidity}</td>
                    <td>{windy}</td>
                    <td>{play}</td>
                </tr>
            )
        })
    }

    if (areFeaturesHighlighted) {
        return (
            <Table striped bordered hover id="weatherTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                <thead>
                    <tr id="features">
                        <th>#</th>
                        <th style={{ backgroundColor: "rgb(197, 235, 202)" }}>Outlook</th>
                        <th style={{ backgroundColor: "rgb(197, 235, 202)" }}>Temperature</th>
                        <th style={{ backgroundColor: "rgb(197, 235, 202)" }}>Humidity</th>
                        <th style={{ backgroundColor: "rgb(197, 235, 202)" }}>Windy</th>
                        <th style={{ backgroundColor: "rgb(197, 235, 202)" }}>Play</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </Table>
        )
    }
    else {
        return (
            <Table striped bordered hover id="weatherTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                <thead>
                    <tr id="features">
                        <th>#</th>
                        <th>Outlook</th>
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
        )
    }


}

export default Dataset;
