import { Container, Row, Button, Col } from "react-bootstrap";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step3 = (props) => {


    return (
        <Container  className='card' style={{ width: '80em', background: 'rgb(242, 239, 229, 0.3)', paddingBottom: "1em", paddingTop:"1em"}}>
              <Row >
                    <Col style={{ textAlign: "left" }}>                    <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button></Col>
                    <Col><h4>ID3 algorithm</h4></Col>
                    <Col style={{ textAlign: "right" }}><Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button></Col>
                </Row>
                <hr/>
            <Container style={{ textAlign: "center", height: '30em', width: "auto", paddingTop: "2em", paddingBottom: "2em" }}>

                <Row>
                    <Col md={6} style={{ textAlign: "left" }}>
                        <ul>
                            <li>
                            ID3 algorithm is used to generate a decision tree from existing data. 
                            </li>
                            <li>
                            In every iteration of the algorithm, it iterates through every unused feature in the data and calculates the entropy and information gain.
                            </li>
                            <li>
                            To put it simply, <b>entropy</b> can be explained as a lack of order or predictability and <b>information gain</b> as the reduction in entropy.<br/><br/>
                            </li>
                            <li>
                            After the calculation, the feature with the highest information gain is chosen. That feature is now a node in the tree and marked as used.
                            </li>
                            <li>
                                The process is repeated until we get to the leaf nodes and then we can make predictions.
                            </li>
                        </ul>

                    </Col>
                    <Col md={6} style={{ textAlign: "left" }}>

                        <div class="jumbotron">
                            <ul class="list-group">
                                <li class="list-group-item">1. compute the entropy for dataset</li>
                                <li class="list-group-item">2. for every feature:<br />
                                    <ol>1. calculate entropy for all categorical values</ol>
                                    <ol>2. take average information entropy for the current feture<br /></ol>
                                    <ol>3. calculate gain for the current feture</ol></li>
                                <li class="list-group-item">3. pick the highest gain feture.</li>
                                <li class="list-group-item">4. Repeat until we get the tree we desired.</li>
                            </ul>

                        </div>
                    </Col>
                </Row>
                


            </Container>
            <Row>
                <Col style={{ textAlign: "center" }}><br/>
                Does this sound a bit complicated?<br/>
                    Let's continue...<br/><br/>
                </Col>
            </Row>
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

export default Step3;