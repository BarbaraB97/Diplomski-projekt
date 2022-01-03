import React from 'react'
import { Container } from 'react-bootstrap'
import StepWizard from 'react-step-wizard'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Step10 from './Step10'
import Step11 from './Step11'
import Step12 from './Step12'
import Step13 from './Step13'

class DecisionTreeStartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenFeature:""
    }
  }

  render() {
    return (
      <Container className='justify-content-center' style={{ textAlign:"center", minHeight: '40em', background: 'rgb(197, 235, 202, 0.5)'}}>
        <h1>Decision tree</h1>
        <StepWizard>
          <Step1/>
          <Step2></Step2>
          <Step3></Step3>
          <Step4></Step4>
          <Step5></Step5>
          <Step6></Step6>
          <Step7></Step7>
          <Step8></Step8>
          <Step9></Step9>
          <Step10></Step10>
          <Step11></Step11>
          <Step12></Step12>
          <Step13></Step13>
        </StepWizard>
      </Container>
    )
  }
}

export default DecisionTreeStartPage;