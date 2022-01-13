import { useState } from "react";
import { Button, Col, Container, Row, Card, Fade, Table, Form, Collapse } from "react-bootstrap";
import DecisionTree2 from '../../components/DecisionTree2';
import TestDataset from '../../components/TestDataset';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Step15 = (props) => {

    const [task, setTask] = useState(1)

    const clickOnRight = () => {
        let i = task + 1
        setTask(i)
    }

    const clickOnLeft = () => {
        let i = task - 1
        setTask(i)
    }

    const TreeData = {
        name: 'Work to do',
        children: [
            {
                name: "STAY IN",
                attributes: {
                    "Work to do": "Yes"
                }
            },
            {
                name: "Outlook",
                attributes: {
                    "Work to do": "No"
                },
                children: [
                    {
                        name: "GO TO BEACH",
                        attributes: {
                            "Outlook" : "Sunny"
                        }
                    },
                    {
                        name: "GO RUNNING",
                        attributes: {
                            "Outlook" : "Overcast"
                        }
                    },
                    {
                        name: "Friends busy",
                        attributes: {
                            "Outlook" : "Rainy"
                        },
                        children: [
                            {
                                name: "STAY IN",
                                attributes: {
                                    "Friends busy" : "Yes"
                                }
                            },
                            {
                                name: "GO TO MOVIES",
                                attributes: {
                                    "Friends busy" : "No"
                                }
                            }
                        ]
                    }
                ]
            }
        ],
    };


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
                                    
                                    <p>Now that you've got the hang of it, let's try another example of a decision tree. 
                                    <br/>
                                    this one would be helpful if you literally have no clue as to what to do with yourself. Let's try it out.
                                    {/* This one would be helpful if you are trying to buy a used car for yourself or for someone close. You don't want to get yourself or them mad by making a wrong decision. */}
                                    <br /></p>
                                    
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                   
                </Row>
                <br/>
                <Row>
                <DecisionTree2 data={TreeData}></DecisionTree2>
                </Row>

                <Collapse in={task === 1}>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    
                                    <p>
                                        Today is a pretty gloomy day and you have been calling your friends but they are all busy with the assignment you have also not yet finished and the deadline is in 3 hours. <br/>What do you do?
                                    </p>
                                    
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                        
                </Row>
                </Collapse>

                <Collapse in={task === 2}>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    
                                    <p>
                                        It's a beautiful summer day, you are at the seaside with your family and your parents are not bugging you to do chores.<br/>What do you do?
                                    </p>
                                    
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                        
                </Row>
                </Collapse>

                <Collapse in={task === 3}>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Text>
                                    
                                    <p>
                                        Since it's been raining cats and dogs the last couple of weeks you have catched up on all your work, both at work and at home. Next thing you know Barbara just texted you if you want to hang out. <br/>What do you do?
                                    </p>
                                    
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                        
                </Row>
                </Collapse>



                <br/>
                <Collapse in={task === 1}>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <br/>
                                
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio11" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-success" for="btnradio11">STAY IN</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio12" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio12">GO TO BEACH</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio13" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio13">GO TO MOVIES</label>
                        </div>
                            

                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <br/>
                            <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={clickOnRight} ><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button>
                    </Col>
                </Row>
                </Collapse>


                <Collapse in={task === 2}>
                <Row>
                <Col style={{ textAlign: "center" }}>
                        <br/>
                            <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={clickOnLeft} ><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button>
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <br/>
                                
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio21" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio21">STAY IN</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio22" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-success" for="btnradio22">GO TO BEACH</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio23" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio23">GO TO MOVIES</label>
                        </div>
                            

                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <br/>
                            <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={clickOnRight} ><AiOutlineArrowRight size={25}></AiOutlineArrowRight></Button>
                    </Col>
                </Row>
                </Collapse>
                
                <Collapse in={task === 3}>
                <Row>
                <Col style={{ textAlign: "center" }}>
                        <br/>
                            <Button style={{ width: "6em", backgroundColor: "rgb(197, 235, 202)", color: "rgb(0,0,0)", borderColor: "rgb(158, 250, 192)" }} onClick={clickOnLeft} ><AiOutlineArrowLeft size={25}></AiOutlineArrowLeft></Button>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        <br/>
                                
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio31" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio31">STAY IN</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio32" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-danger" for="btnradio32">GO TO BEACH</label>

                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio33" autocomplete="off"/>
                        <label style={{borderColor: "blue", color: "blue"}} class="btn btn-outline-success" for="btnradio33">GO TO MOVIES</label>
                        </div>
                            

                    </Col>
                    
                </Row>
                </Collapse>
                

                
                <br/>

                {/* <p>Problem...</p> */}
            </Container>

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

export default Step15;