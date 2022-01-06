import { useState } from "react";
import { Container, Row, Button, Col, Dropdown } from "react-bootstrap";
import PolynomialRegression from "js-polynomial-regression";
import Dataset from '../../components/Simple_lin_reg_dataset';
import CanvasJSReact from './canvasjs.react';
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
    const [degree, setDegree] = useState(initialDegree);
    const handler = (event) => setDegree(event.target.value);

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
    const model = PolynomialRegression.read(data, degree);
    //coefficients of equation
    const terms = model.getTerms();

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
    console.log(terms)
    const poly = getPolyData(terms);

    const linear_regression_graph = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            title: "Price[1000 $]",
        },
        axisX: {
            title: "Size[m²] ",
        },
        width: 480,
        height: 330,
        data: [{
            type: "line",
            toolTipContent: "{x}: {y}",
            dataPoints: getPointsData(poly)
        },
        {
            type: "scatter",
            axisYType: "secondary",
            dataPoints: getPointsData(housesDataset)
        }]
    }

    
    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Simple linear regression graph</h3> 
                <hr></hr><br />
                <Row>
                    <Col> 
                     {/*TO-DO add description of what is on the graph and what can you do with it*/}
                     <div style={{textAlign: "left"}}>
                        On the right, you can see the graphical representation of linear regression for the previous example.
                            The graph shows the most accurate representation of the current dataset that can be obtained by a <b>linear function</b>.
                            You can also try how <b>polynomial regression</b> approximates our points, by choosing the desired degree.
                        </div>
                    <br></br>
                        <Dataset></Dataset>
                    </Col>
                    <Col>
                    <Row>
                    {/*TO-DO make prettier dropdown*/}
                     <div  style = {{display:"flex", flexDirection:"row", alignItems:"center",gap:"5px"}}>
                        <label>Choose polynom degree:</label>
                        <select id="dropdown" onChange={handler}>
                        <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    
                    </Row>
                    <br/>
                    <div>
			            <CanvasJSChart options = {linear_regression_graph} />
		            </div>
                    </Col>
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
export default Step3;