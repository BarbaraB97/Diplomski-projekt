import React from 'react'
import { Container, Button } from 'react-bootstrap'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container className='justify-content-center' style={{ textAlign:"center",  width: '80em', height: '40em', background: 'rgb(128, 204, 255, 0.3)'}}>
        <h1>Explainable AI</h1>
      </Container>
    )
  }
}

export default HomePage
