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
class RegressionStartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container className='justify-content-center' style={{ textAlign:"center", minHeight: '40em', background: 'rgb(197, 235, 202, 0.5)'}}>
        <h1>Linear Regression</h1>
        <StepWizard>
          <Step1/>
          <Step2></Step2>
          <Step3></Step3>
          <Step4></Step4>
          <Step5></Step5>
          <Step6></Step6>
          <Step7></Step7>
        </StepWizard>
      </Container>
    )
  }
}

export default RegressionStartPage;