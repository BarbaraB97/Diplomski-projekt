import { Container, Row, Button, Col } from "react-bootstrap";
import Dataset from '../../components/Simple_lin_reg_dataset';
import LinearRegression from "../../assets/LinearRegression.png";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step3 = (props) => {

    const options = {
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
                    <div>
                        <CanvasJSChart options = {options}
                            /* onRef={ref => this.chart = ref} */
                        />
                        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
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