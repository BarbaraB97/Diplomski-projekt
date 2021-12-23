import { Container, Row, Button, Col } from "react-bootstrap";
import Dataset from '../../components/Simple_lin_reg_dataset';
import LinearRegression from "../../assets/LinearRegression.png";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step3 = (props) => {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            title: "Size (Square meters)",
        },
        axisX: {
            title: "Price (in thousands $)",
        },
        width: 480,
        height: 330,
        data: [{
            type: "scatter",
            toolTipContent: "{x}: {y}",
            dataPoints: [
                { x: 100, y: 10 },
                { x: 200, y: 25 },
                { x: 500, y: 100 },
                { x: 1000, y: 220 },
                { x: 2000, y: 400 }
            ]
        }]
    });
    chart.render();

    calculateTrendLine(chart);
    function calculateTrendLine(chart){
        var a, b, c, d, e, slope, yIntercept;
        var xSum = 0, ySum = 0, xySum = 0, xSquare = 0, dpsLength = chart.data[0].dataPoints.length;
        for(var i = 0; i < dpsLength; i++)
            xySum += (chart.data[0].dataPoints[i].x * chart.data[0].dataPoints[i].y)
        a = xySum * dpsLength;

        for(var i = 0; i < dpsLength; i++){
            xSum += chart.data[0].dataPoints[i].x;
            ySum += chart.data[0].dataPoints[i].y;
        }
        b = xSum * ySum;

        for(var i = 0; i < dpsLength; i++)
            xSquare += Math.pow(chart.data[0].dataPoints[i].x, 2);
        c = dpsLength * xSquare;

        d = Math.pow(xSum, 2);
        slope = (a-b)/(c-d);
        e = slope * xSum;
        yIntercept = (ySum - e) / dpsLength;

        var startPoint = getTrendLinePoint(chart.data[0].dataPoints[0].x, slope, yIntercept);
        var endPoint = getTrendLinePoint(chart.data[0].dataPoints[dpsLength-1].x, slope, yIntercept);

        chart.addTo("data",{
            type: "line", //Line series showing trend
            markerSize: 0,
            dataPoints: [startPoint, endPoint]
        });
    }

    function getTrendLinePoint(x, slope, intercept){
        return {x: x, y: ((slope * x) + intercept)};
    }
    

    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em'}}>
                <h1>Simple linear regression</h1>
                <hr></hr><br />
  
                <Row>
                    <Col>
                        <Dataset></Dataset>
                    </Col>
                    <Col>
                    <div id="chartContainer"></div>
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