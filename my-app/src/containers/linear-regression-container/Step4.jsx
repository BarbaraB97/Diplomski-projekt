import { Container, Row, Button, Col, Card } from "react-bootstrap";
import question from "../../assets/question_mark.png"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const Step4 = (props) => {


    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}> <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col> <h4>Let's play a game...</h4>
                </Col>
                <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
            </Row>
            <hr /><br></br>
            <Container style={{ paddingBottom: "2em" }}>
				<Row style = {{textAlign:"center"}}>
					<Col md={6} style={{ textAlign: "left" ,fontSize: 16}}>
                    <Card >
                            <Card.Body>
                                <Card.Text>
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
                            <li>
							When you are done you can go to the <b>playground</b> and try out regression for your own data
                            </li>
                        </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
					</Col>
					<Col md={6} style={{ textAlign: "center" }}>
						<img src={question} alt="questionmark" height={250} />
					</Col>
				</Row>
				<br></br>
				<Row>
					<h5>To start the quiz, move on...</h5>
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
export default Step4;