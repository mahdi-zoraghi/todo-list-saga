import { Container, Col, Row } from "react-bootstrap"

import Navigation from "./components/Navigation"
import Router from "./Router"

const App = () => {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>To Do List</h1>
          <Navigation />
          <Router />
        </Col>
      </Row>
    </Container>
  )
}

export default App
