import React from 'react'
import { Table } from 'react-bootstrap';

const Dataset = ({ areFeaturesHighlighted, isLabelHighlighted, chosenFeature }) => {

	const housePricesDataset = [
        { size: 10, price: 100},
        { size: 25, price: 200 },
		{ size: 40, price: 300 },
		{ size: 60, price: 500 },
		{ size: 100, price: 700 },
        { size: 150, price: 700 }
	]

    const generateTable = () => {
        return housePricesDataset.map((record, index) => {
            const { size, price } = record;
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td style={{backgroundColor: chosenFeature === "Size" ? "rgb(197, 235, 202)" : null }}>{size}</td>
                    <td style={{backgroundColor: chosenFeature === "Price" ? "rgb(197, 235, 202)" : null }}>{price}</td>
                </tr>
            )
        })
    }
 

    return (
        <Table striped bordered hover id="simpleRegressionTable" style={{ heigth: "35em", width: "30em", backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
            <thead>
                <tr id="features">
                    <th>#</th>
                    <th style={{ backgroundColor: isLabelHighlighted ? null : areFeaturesHighlighted ? "rgb(197, 235, 202)" : null }}>Size [m<sup>2</sup>] </th>
                    <th style={{ backgroundColor: isLabelHighlighted ? "rgb(197, 235, 202)" : areFeaturesHighlighted ? "rgb(197, 235, 202)" : null }}>Price [1000 $]</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </Table>
    )
}

export default Dataset;
