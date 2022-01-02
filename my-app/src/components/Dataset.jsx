import React from 'react'
import { Table } from 'react-bootstrap'

const Dataset = ({ areFeaturesHighlighted, isLabelHighlighted, chosenFeature, chosenFeatureValue, isTableStriped, filterByValue }) => {

    let weatherDataset = [
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
        { outlook: "rainy", temperature: "mild", humidity: "high", windy: "true", play: "no" }
    ]

    const generateTable = () => {
        if(filterByValue){
            weatherDataset = weatherDataset.filter(record => filterByValue == (record.outlook || record.temperature || record.humidity || record.windy || record.play))
        }
        return weatherDataset.map((record, index) => {
            const { outlook, temperature, humidity, windy, play } = record;
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td style={{backgroundColor: chosenFeatureValue === outlook ? "#7EB59A" : (chosenFeature === "Outlook" ? "rgb(197, 235, 202)" : null) }}>{outlook}</td>
                    <td style={{backgroundColor: chosenFeatureValue === temperature ? "#7EB59A" : (chosenFeature === "Temperature" ? "rgb(197, 235, 202)" : null ) }}>{temperature}</td>
                    <td style={{backgroundColor: chosenFeatureValue === humidity ? "#7EB59A" : (chosenFeature === "Humidity" ? "rgb(197, 235, 202)" : null)}}>{humidity}</td>
                    <td style={{backgroundColor:  chosenFeatureValue === windy ? "#7EB59A" : (chosenFeature === "Windy" ? "rgb(197, 235, 202)" : null) }}>{windy}</td>
                    <td style={{backgroundColor:  chosenFeatureValue === play || chosenFeatureValue === temperature  ? "#7EB59A" : (chosenFeature === "Play" ? "rgb(197, 235, 202)" : null )}}>{play}</td>
                </tr>
            )
        })
    }

    return (
        <Table striped={isTableStriped} bordered hover id="weatherTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
            <thead>
                <tr id="features">
                    <th>#</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : chosenFeature==="Outlook" ?  "rgb(197, 235, 202)" : null  }}>Outlook</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : chosenFeature==="Temperature" ?  "rgb(197, 235, 202)" : null }}>Temperature</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : chosenFeature==="Humidity" ?  "rgb(197, 235, 202)" : null  }}>Humidity</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : chosenFeature==="Windy" ?  "rgb(197, 235, 202)" : null  }}>Windy</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? "rgb(197, 235, 202)" : areFeaturesHighlighted ? "rgb(197, 235, 202)" :  chosenFeature==="Play" ?  "rgb(197, 235, 202)" : null  }}>Play</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </Table>
    )
}

export default Dataset;
