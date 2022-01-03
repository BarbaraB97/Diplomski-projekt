import { Container, Row, Button, Col } from "react-bootstrap";
import regression from 'regression';
import Dataset from '../../components/Simple_lin_reg_dataset';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step3 = (props) => {

   /* TO-DO
      -- this has to be a function that converts dataset into array of points 
   */ 
    let housesDataset = [[100, 10],
     [200, 25], 
     [500, 100],
     [1000, 220], 
     [2000, 400]]


    //linear regression calculation on our dataset
    const points = regression.linear(housesDataset).points;

    //transform linear regression points in format for graph
    const getPointsData = (pointArray) => {
        let dataPoints = []
        for (let i = 0;i < pointArray.length; i++ ) {
            dataPoints.push({ x: pointArray[i][0], y: pointArray[i][1]})
        }
        return dataPoints;
    }

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
            title: "Size[m²]",
        },
        axisX: {
            title: "Price[1000 $]",
        },
        width: 480,
        height: 330,
        data: [{
            type: "line",
            toolTipContent: "{x}: {y}",
            dataPoints: getPointsData(points)
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
               {/*<h3>Example: House prices by their size</h3> */}
                <hr></hr><br />
                <Row>
                    <Col> 
                        <Dataset></Dataset>
                    </Col>
                    <Col>
                    <div>
			<CanvasJSChart options = {options}
				// onRef={ref => this.chart = ref} 
			    />
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