import React from 'react'
import { Container } from 'react-bootstrap'
import StepWizard from 'react-step-wizard'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
class DecisionTreeStartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
        </StepWizard>
      </Container>
    )
  }
}

export default DecisionTreeStartPage;