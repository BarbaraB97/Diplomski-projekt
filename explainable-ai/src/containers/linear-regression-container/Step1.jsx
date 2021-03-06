import { Container, Row, Button, Col, Card } from "react-bootstrap";
import LinearRegression from "../../assets/LinearRegression.png"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step1 = (props) => {


    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em" , paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}> <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col><h4>What is a linear regression?</h4></Col>
                <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
            </Row>
            <hr />
            <Container style={{ paddingTop: "1em", paddingBottom: "2em" }}>
            <Card >
                            <Card.Body>
                                <Card.Text>
                                        <p><b>Linear regression</b> is a linear approach for modeling the relationship between one dependent and one or more independent variables.<br></br>
                                            When there is just one independent variable it is called simple linear regression
                                                and if there is more of them, we are talking about multiple linear regression.<br/>
                                            Linear regression is a basic and commonly used type of predictive analysis in many fields.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                            <img src={LinearRegression} alt="example" height={250} />
                <p>In the next step you can see the example of a simple linear regression problem.</p>
                            </Card.Body>
                        </Card>
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

export default Step1;