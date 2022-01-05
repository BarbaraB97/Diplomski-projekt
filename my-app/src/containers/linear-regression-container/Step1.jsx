import { Container, Row, Button, Col } from "react-bootstrap";
import LinearRegression from "../../assets/LinearRegression.png"

const Step1 = (props) => {


    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em', paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>What is linear regression?</h3>
                <hr></hr>
                <p><b>Linear regression</b> is a linear approach for modeling the relationship between one dependent and one or more independent variables.<br></br>
                 When there is just one independent variable it is called simple linear regression
                    and if there is more of them, we are talking about multiple linear regression.<br/>
                 Linear regression is a basic and commonly used type of predictive analysis in many fields.</p>
                <img src={LinearRegression} alt="example" height={250} />
                <p>In the next step you can see the example of a simple linear regression problem.</p>
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

export default Step1;