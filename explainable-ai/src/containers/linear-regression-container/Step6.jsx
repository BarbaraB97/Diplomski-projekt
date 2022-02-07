import { useState } from "react";
import { Container, Row, Button, Col, Table, Modal, Popover, OverlayTrigger } from "react-bootstrap";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PolynomialRegression from "js-polynomial-regression";
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Step6 = (props) => {

     /* TO-DO
      -- this has to be a function that converts dataset into array of points 
      -- dataset has to be read from some file
    */ 
      const [show, setShow] = useState(false);
      const dataset = [
        [10, 100],
        [25, 180], 
        [40, 320],
        [60, 500],
        [100, 700]
    ]

    const initialStyles = undefined
    const correct_answer = "graph1";
    const[graphStyles, setGraphStyles]=useState({initialStyles})
    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);

    //close modal window
    const handleClose = () => {
        setShowCorrect(false);
        setShowWrong(false);
    }
    
    //update style of graph based on accuracy of answer
    const updateStyles = (answer) => {
        if(answer===correct_answer) {
            setGraphStyles({graphStyles,[answer]:
            {
            borderStyle:"solid",
            borderColor:"green",
            borderWidth:"5px"
            }
        })
        setShowCorrect(true);
    }
        if(answer!==correct_answer) {
            setGraphStyles({graphStyles,[answer]:
            {
                borderStyle:"solid",
                borderColor:"red",
                borderWidth:"5px"
            }
        })
        setShowWrong(true);
    }
    }

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
        for(let i = 9; i <= 100; i+=1)
            {let y = my_predict(terms,i)
            dataPoints.push([i,y]);
            }
        return dataPoints;
    }

    //regression (1, 2, 3)
    const data = getPointsData(dataset)
    let model = PolynomialRegression.read(data, 1);
    const terms1 = model.getTerms();

    model = PolynomialRegression.read(data, 3);
    const terms2 = model.getTerms();

    model = PolynomialRegression.read(data, 5);
    const terms3 = model.getTerms();

    const points1 = getPolyData(terms1);
    const points2 = getPolyData(terms2);
    const points3 = getPolyData(terms3);
    
    const graph1 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", 
        axisY: {
            title: "",
        },
        axisX: {
            title: "",
        },
        width: 550,
        height: 250,
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
        theme: "light2",
        axisY: {
            title: "",
        },
        axisX: {
            title: "",
        },
        width: 550,
        height: 250,
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
        theme: "light2", 
        axisY: {
            title: "",
        },
        axisX: {
            title: "",
        },
        width: 350,
        height: 250,
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



    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}> <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                 <Col><h4 style={{ width: "30em"}}><b>Task 2: </b>Choose the best model for the given data </h4></Col>
                
                <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
            </Row>
        <hr />
        <Container style={{ paddingBottom: "2em", paddingTop: "1em"  }}>
                <Modal show={showCorrect} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Good job!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>That is the correct answer! Move on to the next task.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={() => {
                            handleClose()
                            props.nextStep()}}>
                        Next
                        </Button>
                     </Modal.Footer>
                </Modal>
                <Modal show={showWrong} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Too bad!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>That is not the best choice for this data. Try again!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                        Close
                        </Button>
                     </Modal.Footer>
                </Modal>
                <Row>
                    <Col>
                    <div class= "card-header">degree = 1</div>
                        <div class = "card text-center" style = {graphStyles.graph1} onClick = {()=> updateStyles("graph1")} >
                            <CanvasJSChart options = {graph1} />
                        </div>
                    </Col>
                    <Col>
                    <div class= "card-header">degree = 3</div>
                        <div class = "card text-center" style = {graphStyles.graph2} onClick = {()=> updateStyles("graph2")} >
                            <CanvasJSChart options = {graph2} />
                        </div>
                    </Col>
                    {/* <Col>
                    <div class= "card-header">degree = 5</div>
                        <div class = "card text-center" style = {graphStyles.graph3} onClick = {()=> updateStyles("graph3")} >
                            <CanvasJSChart options = {graph3} />
                        </div>
                    </Col> */}
		        </Row>
                <Row>
                    <Col style={{ textAlign: "right", paddingTop: "1em" }}>
                    <OverlayTrigger hover placement="left" overlay={<Popover id="popover-basic">
                            <Popover.Header as="h3">Remember under- and overfitting?</Popover.Header>
                                <Popover.Body>
                                    <ul>
                                    <li>
                                    <b>Underfitting</b> occurs when our statistical model cannot adequately capture the underlying structure of the data
                                    </li>
                                    <li>
                                    <b>Overfitting</b> is a condition where a statistical model begins to describe the random error in the data rather than the relationships between variables
                                    </li>
                                    </ul>
                                </Popover.Body>
                            </Popover>}>
                        <Button class="btn btn-secondary" style={{ width: "6em"}} >Help</Button>
                    </OverlayTrigger>
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
export default Step6;