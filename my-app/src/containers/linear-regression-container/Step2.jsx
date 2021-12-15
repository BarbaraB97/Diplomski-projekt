import { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Dataset from '../../components/Simple_lin_reg_dataset'

const Step2 = (props) => {

    const [areFeaturesHighlighted, setHighlightFeatures] = useState(false);
    const [isLabelHighlighted, setHighlightLabel] = useState(false);

    const highlightFeatures = () => {
        setHighlightFeatures(!areFeaturesHighlighted);
    }

    const hightlightLabel = () => {
        setHighlightLabel(!isLabelHighlighted);
    }

    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>Simple linear regression</h3>
                <hr></hr><br />
  
                <Row>
                    <Col>
                        <Dataset areFeaturesHighlighted={areFeaturesHighlighted} isLabelHighlighted={isLabelHighlighted}></Dataset>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                    <b>Simple linear regression</b> is a linear regression model with a single explanatory variable. That is, it concerns two-dimensional sample points 
                    with one independent and one dependent variable and finds a linear function that, 
                    as accurately as possible, predicts the dependent variable values as a function of the independent variable.<br /><br />
                    </Col>
                </Row>

            </Container>
            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(5)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step2;