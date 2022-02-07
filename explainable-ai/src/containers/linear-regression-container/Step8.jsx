import { useState } from "react";
import { Container, Row, Button, Col, Table, Form } from "react-bootstrap";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PolynomialRegression from "js-polynomial-regression";
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step8 = (props) => {

    
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
        var maxVal = Math.max.apply(Math, dps.map(function(o) { return o[0]; }))
        var minVal = Math.min.apply(Math, dps.map(function(o) { return o[0]; }))
        // TO-DO don't use hardcoded value ?
        for(let i = minVal; i <= maxVal; i+=0.01)
            {let y = my_predict(terms,i)
            dataPoints.push([i,y]);
            }
        return dataPoints;
    }

    const initialDps = []; //dataPoints.
    const initialChart = {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        data: [{
            type: "scatter",
            dataPoints : getPointsData(initialDps)
        }
    ],
        responsive: true,
        height: 290
    };
    const [dps, setDps] = useState(initialDps);
    const [chart, setChart] = useState(initialChart);

    //degree variable has to change when something is selected in dropdown
    const initialDegree = 1;
    const [degree, setDegree] = useState(initialDegree);

    const handler = () => {
        var xValue = Number(document.getElementById('xValue').value);
        console.log(dps)
        var yValue = Number(document.getElementById('yValue').value);
        dps.push([xValue, yValue])
        setDps(dps)

        //regression
        var data = getPointsData(dps)
        const model = PolynomialRegression.read(data, degree);
        //coefficients of equation
        const terms = model.getTerms();
        const poly = getPolyData(terms);

        var chart = {
            zoomEnabled: true,
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            data: [{
                type: "scatter",
                dataPoints : getPointsData(dps)
            },
            {
                type: "line",
                toolTipContent: "{x}: {y}",
                dataPoints: getPointsData(poly)
            }
            ],
            responsive: true,
            height: 290
        };
        setChart(chart)
    }

    const degreeChange = (event) => {
        var helpDegree = event.target.value
        setDegree(helpDegree);
        setDps(dps)

        //regression
        var data = getPointsData(dps)
        const model = PolynomialRegression.read(data, helpDegree);
        //coefficients of equation
        const terms = model.getTerms();
        const poly = getPolyData(terms);

        var chart = {
            zoomEnabled: true,
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            data: [{
                type: "line",
                dataPoints: getPointsData(poly)
            },
            {
                type: "scatter",
                dataPoints : getPointsData(dps)
            }
            ],
            responsive: true,
            height: 290
        };
        setChart(chart)
        console.log(helpDegree)
    }

    const deleteAll = () => {
        setDps(initialDps)
        setChart(initialChart)
    }
    

    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}> <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col> <h2>Regression playground</h2>
                </Col>
            <Col></Col>
            </Row>
            <hr />
            <Container style={{ paddingBottom: "2em" }}>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control id="xValue" type="number" step="any" placeholder="x value"/>
                        </Col>
                        <Col>
                        <Form.Control id="yValue" type="number" step="any" placeholder="y value"/>
                        </Col>
                        <Col>
                        <Button id="renderButton" onClick={handler}>Add point</Button> &nbsp;
                        <Button variant="danger" id="deleteButton" onClick={deleteAll}>Delete all</Button>
                        </Col>
                        <Col>
                        <Form.Label>Choose polynom degree:</Form.Label>
                        </Col>
                        <Col>
                        <Form.Select id="dropdown" onChange={degreeChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                        </Col>
                    </Row>
                </Form>
                <br/>
                <Row>
                    <Col>
                        <CanvasJSChart options = {chart} />
                    </Col>
                </Row>
          
            </Container>
            <Row>
                <Col >
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.firstStep}>First Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{backgroundColor:"rgb(197, 235, 202)", color:"rgb(0,0,0)", borderColor:"rgb(158, 250, 192)"}} onClick={() => props.goToStep(8)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );

}
export default Step8;