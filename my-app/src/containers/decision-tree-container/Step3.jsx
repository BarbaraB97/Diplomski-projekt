import { Container, Row, Button, Col } from "react-bootstrap";

const Step3 = (props) => {


    return (
        <Container style={{ width: '80em', background: 'rgb(252, 249, 242)', paddingBottom: "1em" }}>
            <Container style={{ textAlign: "center", height: '30em', width: "auto", paddingTop: "2em", paddingBottom: "2em" }}>
                <h3>ID3 algorithm</h3>
                <hr />

                <Row>
                    <Col md={3} style={{ textAlign: "left" }}>
                    Decision Tree and ID3 definition...<br/>
                    <b>Entropy:</b> ...<br/> 
                    <b>Information Gain: </b>...

                    </Col>
                    <Col md={6} style={{ textAlign: "left" }}>
                        <div class="jumbotron">
                            <ul class="list-group">
                                <li class="list-group-item">1. compute the entropy for data-set</li>
                                <li class="list-group-item">2.for every attribute/feature:<br />
                                    <ol>1.calculate entropy for all categorical values</ol>
                                    <ol>2.take average information entropy for the current attribute<br /></ol>
                                    <ol>3.calculate gain for the current attribute</ol></li>
                                <li class="list-group-item">3. pick the highest gain attribute.</li>
                                <li class="list-group-item">4. Repeat until we get the tree we desired.</li>
                            </ul>

                        </div>
                    </Col>
                </Row>


            </Container>
            <Row>
                <Col >
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.firstStep}>First Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.previousStep}>Previous Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} disabled>Current Step:{props.currentStep} </Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={props.nextStep}>Next Step</Button>
                    <Button style={{ backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={() => props.goToStep(3)}>Last Step</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Step3;