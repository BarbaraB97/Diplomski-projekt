import { Container, Row, Button, Col } from "react-bootstrap";
import decisionTreeExample from "../../assets/decision-tree-example.png"

const Step1 = (props) => {


    return (
        <Container className='justify-content-center' style={{ textAlign: "center", width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em", paddingTop: "1em" }}>
            <h2>What is a decision tree?</h2><hr />
            <Container style={{ textAlign: "left", height: '30em', paddingTop: "2em", paddingBottom: "2em", width: "80%" }}>
                <ul>
                    <li>
                        <p>A <b>decision tree</b> is a flowchart-like structure in which each internal node represents a "test" on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).<br /></p>
                    </li>
                    <li>
                        <p>The decision tree model is widely known and used in many businesses to support decision making process and risk analysis.</p>
                    </li>
                    <li>
                        Here's an example of decision tree:
                    </li>
                </ul>
                <Container className="justify-content-center" style={{ display:"flex", alignContent:"center" }}>
                    <img src={decisionTreeExample} alt="example" height={250} />
                </Container>


                {/* <p>Problem...</p> */}
            </Container>
            <p>Let's see how does decision trees work...</p>

            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(9)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step1;