import { Container, Row, Button, Col, Card } from "react-bootstrap";
import decisionTreeExample from "../../assets/decision-tree-example.png"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step1 = (props) => {


    return (
        <Container className='card' style={{ textAlign: "center", width: '80em', background: 'rgb(242, 239, 229, 0.2)', paddingBottom: "1em", paddingTop: "1em" }}>
            <Row >
                <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                <Col><h4>What is a decision tree?</h4></Col>
                <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
            </Row>
            <hr />
            <Container style={{ textAlign: "left", paddingTop: "2em", paddingBottom: "2em", width: "80%" }}>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            <p>A <b>decision tree</b> is a flowchart-like structure in which each internal node represents a "test" on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).<br /></p>
                                        </li>
                                    </ul>
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            <p>The decision tree model is widely known and used in many businesses to support decision making process and risk analysis.</p>
                                        </li>
                                    </ul>
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    <li>
                                        Here's an example of decision tree:
                                    </li>
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>
                </Row>

                <Container className="justify-content-center" style={{ display: "flex", alignContent: "center" }}>
                    <img src={decisionTreeExample} alt="example" height={250}/>
                </Container>
                <br/>

                {/* <p>Problem...</p> */}
            </Container>
            <p>Let's see how does decision trees work...</p>

            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(14)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step1;