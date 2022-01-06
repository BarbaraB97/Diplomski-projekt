import { useState } from "react";
import { Container, Row, Button, Col, Table } from "react-bootstrap";
import PolynomialRegression from "js-polynomial-regression";
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  /* TO-DO
      -- this has to be a function that converts dataset into array of points 
      -- dataset has to be read from some file
   */ 
      let dataset = [
        [10, 100],
        [25, 400], 
        [40, 1000],
        [60, 3000],
        [70, 5000],
        ]

        //function that transforms array of points in format for graph (array of JSONs)
        const getPointsData = (pointArray) => {
            let dataPoints = []
            for (let i = 0;i < pointArray.length; i++ ) {
                dataPoints.push({ x: pointArray[i][0], y: pointArray[i][1]})
            }
            return dataPoints;
        }
    
        //function that calculates regression based on obtained terms
        const my_predict = (coeffs,X) => {
            let res = 0;
            for (let i = 0; i < coeffs.length; i++){
                res+=coeffs[i]*Math.pow(X,i);
            }
            return res;
        }
    
        //function that returns whole dataset for [0, max(dataset)] - for plotting
        const getPolyData = (terms) => {
            let dataPoints = [] 
            // TO-DO don't use hardcoded value ?
            for(let i = 0; i <= 70; i+=1)
             {let y = my_predict(terms,i)
             dataPoints.push([i,y]);
             }
            return dataPoints;
        }

        //regression (1, 2, 5)
        var data = getPointsData(dataset)
        let model = PolynomialRegression.read(data, 1);
        const terms1 = model.getTerms();

        model = PolynomialRegression.read(data, 2);
        const terms2 = model.getTerms();

        model = PolynomialRegression.read(data, 5);
        const terms3 = model.getTerms();

        const points1 = getPolyData(terms1);
        const points2 = getPolyData(terms2);
        const points3 = getPolyData(terms3);
    
        const graph1 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            axisY: {
                title: "",
            },
            axisX: {
                title: "",
            },
            width: 300,
            height: 300,
            data: [{
                type: "line",
                toolTipContent: "{x}: {y}",
                dataPoints: getPointsData(points1)
            },
            {
                type: "scatter",
                axisYType: "secondary",
                dataPoints: getPointsData(dataset)
            }]
        }

        const graph2 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            axisY: {
                title: "",
            },
            axisX: {
                title: "",
            },
            width: 300,
            height: 300,
            data: [{
                type: "line",
                toolTipContent: "{x}: {y}",
                dataPoints: getPointsData(points2)
            },
            {
                type: "scatter",
                axisYType: "secondary",
                dataPoints: getPointsData(dataset)
            }]
        }

        const graph3 = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            axisY: {
                title: "",
            },
            axisX: {
                title: "",
            },
            width: 300,
            height: 300,
            data: [{
                type: "line",
                toolTipContent: "{x}: {y}",
                dataPoints: getPointsData(points3)
            },
            {
                type: "scatter",
                axisYType: "secondary",
                dataPoints: getPointsData(dataset)
            }]
        }

const Step5 = (props) => {


    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em'}}>
				<br></br>
                <h2>Problem 1</h2>
				{/*TO-DO Description of the problem */}
				<hr></hr><br />
				<Table striped bordered hover id="simpleRegressionTable" style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                {/*TO-DO find some dataset and put in this table*/}
                </Table>
                <Row>
                    <Col><CanvasJSChart options = {graph1} /></Col>
                    <Col><CanvasJSChart options = {graph2} /></Col>
                    <Col><CanvasJSChart options = {graph3} /></Col>
		        </Row>
            </Container>
            <Row>
                <Col >
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.firstStep}>First Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={() => props.goToStep(3)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );

}
export default Step5;