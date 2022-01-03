import { Container, Row, Button, Col } from "react-bootstrap";
import question from "../../assets/question_mark.png"
import CanvasJSReact from './canvasjs.react';

const Step4 = (props) => {


    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em'}}>
				<br></br>
                <h2>Let's play a game...</h2>
				<hr></hr><br />
				<Row style = {{textAlign:"center"}}>
					<Col md={6} style={{ textAlign: "left" ,fontSize: 16}}>
					<ul>
                            <li>
                            In the following steps, you will get several dataset examples and corresponding graphs of <b>different degrees</b> of regression for each of them
                            </li>
                            <li>
  							Your task is to <b>choose the best model</b> for the current dataset, according to what you know so far about regression
                            </li>
                            <li>
							You will then be able to check the accuracy of your solution
                            </li>
                        </ul>
					</Col>
					<Col md={6} style={{ textAlign: "center" }}>
						<img src={question} alt="questionmark" height={250} />
					</Col>
					
				</Row>
				<br></br>
				<Row>
					<h5>To start the quiz, move on...</h5>
				</Row> 
				 <b></b>
          
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
export default Step4;