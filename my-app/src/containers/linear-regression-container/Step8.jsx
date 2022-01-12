import { useState } from "react";
import { Container, Row, Button, Col, Table, Form } from "react-bootstrap";
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
        // TO-DO don't use hardcoded value ?
        for(let i = 0; i <= maxVal; i+=maxVal/50)
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
        height: 300
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
                dataPoints: getPointsData(poly)
            }
            ],
            responsive: true,
            height: 300
        };
        setChart(chart)
    }

    const degreeChange = (event) => setDegree(event.target.value);

    const deleteAll = () => {
        setDps(initialDps)
        setChart(initialChart)
    }
    

    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em'}}>
				<br></br>
                <h2>Regression playground</h2>
				<hr></hr>

				<Table striped bordered hover id="simpleRegressionTable" style={{ backgroundColor: "rgb(197, 235, 202, 0.3)" }}>
                                  
                </Table>

                <Form>
                    <Row>
                        <Col>
                        <Form.Control id="xValue" type="number" step="any" placeholder="Enter x value"/>
                        </Col>
                        <Col>
                        <Form.Control id="yValue" type="number" step="any" placeholder="Enter y value"/>
                        </Col>
                        <Col>
                        <Button id="renderButton" onClick={handler}>Add point</Button> &nbsp;
                        <Button variant="danger" id="deleteButton" onClick={deleteAll}>Delete all</Button>
                        </Col>
                        <Col>
                        <div  style = {{display:"flex", flexDirection:"row", alignItems:"center",gap:"5px"}}>
                        <label>Choose polynom degree:</label>
                        <select id="dropdown" onClick={degreeChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                        </Col>
                    </Row>
                </Form>
                <br/>

                <CanvasJSChart options = {chart} />
          
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