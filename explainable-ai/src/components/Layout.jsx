import { Container, Nav, Navbar } from 'react-bootstrap'

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>

          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/regression'>Linear Regression</Nav.Link>
            <Nav.Link href='/decision-tree'>Decision Tree</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
