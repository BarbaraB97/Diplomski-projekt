import { useState } from "react";
import { Container, Row, Button, Col, Form, Accordion } from "react-bootstrap";
import PolynomialRegression from "js-polynomial-regression";
import Dataset from '../../components/Simple_lin_reg_dataset';
import CanvasJSReact from './canvasjs.react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step3 = (props) => {

   /* TO-DO
      -- this has to be a function that converts dataset into array of points 
      -- dataset has to be read from some file
   */ 
    let housesDataset = [
    [10, 100],
    [25, 200], 
    [40, 300],
    [60, 500],
    [100, 700],
    [150, 700]
    ]

    //degree variable has to change when something is selected in dropdown
    const initialDegree = 1;
    const [degree1, setDegree1] = useState(initialDegree);
    const [degree2, setDegree2] = useState(initialDegree);
    const handler1 = (event) => setDegree1(event.target.value);
    const handler2 = (event) => setDegree2(event.target.value);

    //function that transforms array of points in format for graph (array of JSONs)
    const getPointsData = (pointArray) => {
        let dataPoints = []
        for (let i = 0;i < pointArray.length; i++ ) {
            dataPoints.push({ x: pointArray[i][0], y: pointArray[i][1]})
        }
        return dataPoints;
    }

    //regression
    var data = getPointsData(housesDataset)
    const model1 = PolynomialRegression.read(data, degree1);
    const model2 = PolynomialRegression.read(data, degree2);
    //coefficients of equation
    const terms1 = model1.getTerms();
    const terms2 = model2.getTerms();

    //function that calculates regression based on obtained terms
    const my_predict = (coeffs,X) => {
        let res = 0;
        for (let i = 0; i < coeffs.length; i++){
            res+=coeffs[i]*Math.pow(X,i);
        }
        return res;
    }

    //function that returns whole dataset for [0, max(housedataset)] - for plotting
    const getPolyData = (terms) => {
        let dataPoints = [] 
        // TO-DO don't use hardcoded value ?
        for(let i = 0; i <= 150; i+=1)
         {let y = my_predict(terms,i)
         dataPoints.push([i,y]);
         }
        return dataPoints;
    }
    const poly1 = getPolyData(terms1);
    const poly2 = getPolyData(terms2);

    const error_graph = {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            title: "Price[1000 $]",
            minimum: 0,
            maximum: 800
        },
        axisX: {
            title: "Size[m??] ",
            minimum: 0
        },
        width: 480,
        height: 330,
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
 
                e.chart.render();
            }
        },
        data: [{
            type: "line",
            toolTipContent: "{x}: {y}",
            dataPoints: getPointsData(poly2)
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[0][0], poly2[housesDataset[0][0]][1]], housesDataset[0]])   
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[1][0], poly2[housesDataset[1][0]][1]], housesDataset[1]])   
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[2][0], poly2[housesDataset[2][0]][1]], housesDataset[2]])   
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[3][0], poly2[housesDataset[3][0]][1]], housesDataset[3]])   
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[4][0], poly2[housesDataset[4][0]][1]], housesDataset[4]])   
        },
        {
            type: "line",
            color: "red",
            dataPoints: getPointsData([[housesDataset[5][0], poly2[housesDataset[5][0]][1]], housesDataset[5]])   
        }]
    }

    const linear_regression_graph = {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            title: "Price[1000 $]",
            minimum: 0,
            maximum: 800
        },
        axisX: {
            title: "Size[m??] ",
            minimum: 0
        },
        width: 480,
        height: 330,
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
 
                e.chart.render();
            }
        },
        data: [{
            showInLegend: true,
            legendText: "prediction",
            type: "line",
            toolTipContent: "{x}: {y}",
            dataPoints: getPointsData(poly1)
        },
        {
            showInLegend: true,
            legendText: "input",
            type: "scatter",
            axisYType: "secondary",
            dataPoints: getPointsData(housesDataset)
        }]
    }

    
    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
        <Row >
            <Col style={{ textAlign: "left" }}> <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
            <Col><h4>Simple linear regression graph</h4></Col>
            <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
        </Row>
        <hr />
            <Container style={{ paddingBottom: "2em" }}>
                <Row>
                    <Col> 
                     <div style={{textAlign: "left"}}>
                        On the right, you can see the graphical representation of linear regression for the previous example.
                            The graph shows the most accurate representation of the current dataset that can be obtained by a <b>linear function</b>.
                            You can also try how <b>polynomial regression</b> approximates our points, by choosing the desired degree.
                        </div>
                    <br></br>
                        <Dataset></Dataset>
                    </Col>
                    <Col>
                    
                    <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Regression graph</Accordion.Header>
                                <Accordion.Body>
            
                    <Row>
                     <div  style = {{display:"flex", flexDirection:"row", alignItems:"center",gap:"5px"}}>
                        <Col>
                            <Form.Label>Choose polynom degree:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Select id="dropdown" onChange={handler1}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Col>
                    </div>
                    </Row>
                    <br/>
                    <div>
			            <CanvasJSChart options = {linear_regression_graph} />
		            </div>
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Residual error</Accordion.Header>
                                <Accordion.Body>
                                A residual is a measure of how far away a point is vertically from the regression line.
                                Simply, it is the error between a predicted value and the observed actual value. <br/><br/>
                                <b>Residual (e) = observed value ??? predicted value</b> <br/><br/>
                                Positive values for the residual (on the y-axis) mean the prediction was too low, and negative values mean the prediction was too high; 0 means the guess was exactly correct. <br/><br/>
            
                    <Row>
                     <div  style = {{display:"flex", flexDirection:"row", alignItems:"center",gap:"5px"}}>
                        <Col>
                            <Form.Label>Choose polynom degree:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Select id="dropdown" onChange={handler2}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Col>
                    </div>
                    </Row>
                    <br/>
                    <div>
			            <CanvasJSChart options = {error_graph} />
		            </div>
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1"
                            style={{ backgroundColor: "rgb(197, 235, 202)" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How to find the right model?</Accordion.Header>
                                <Accordion.Body>
                                There are two main concepts to consider when choosing the right regression model for your data:
                                <ul>
                                    <li>
                                    <b>Underfitting</b> occurs when our statistical model cannot adequately capture the underlying structure of the data
                                    </li>
                                    <li>
                                    <b>Overfitting</b> is a condition where a statistical model begins to describe the random error in the data rather than the relationships between variables
                                    </li>
                                    </ul>
                                    Underfitted model performs poorly both on test and training data and overfitting causes the model to perform great on the training set, but bad on unknown data.<br></br>
                                    <br/>In our dataset this happens with the model of polynom with <b>degree 5</b>.   
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
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
export default Step3;