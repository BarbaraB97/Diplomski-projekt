import React from 'react'
import { Table } from 'react-bootstrap';

const Dataset = ({ areFeaturesHighlighted, isLabelHighlighted, chosenFeature }) => {


	const housePricesDataset = [
        { price: 100, size: 10 },
        { price: 200, size: 25 },
		{ price: 500, size: 100 },
		{ price: 1000, size: 220 },
		{ price: 2000, size: 400 }
	]

    const generateTable = () => {
        return housePricesDataset.map((record, index) => {
            const { price,size } = record;
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td style={{backgroundColor: chosenFeature === "Price" ? "rgb(197, 235, 202)" : null }}>{price}</td>
                    <td style={{backgroundColor: chosenFeature === "Size" ? "rgb(197, 235, 202)" : null }}>{size}</td>
                </tr>
            )
        })
    }
    



    return (
        <Table striped bordered hover id="simpleRegressionTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
            <thead>
                <tr id="features">
                    <th>#</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : null }}>Price (in thousands $)</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? "rgb(197, 235, 202)" : areFeaturesHighlighted ? "rgb(197, 235, 202)" : null }}>Size (Square meters)</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </Table>
    )
}

export default Dataset;
