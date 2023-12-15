import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const MainContent: React.FC = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="mb-3">
          <div className="text-center">
            <h2>Feed your employees</h2>
            <Button variant="outline-secondary">
              Create a business account
            </Button>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="text-center">
            <h2>Your restaurant, delivered</h2>
            <Button variant="outline-secondary">Add your restaurant</Button>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="text-center">
            <h2>Deliver with Uber Eats</h2>
            <Button variant="outline-secondary">Sign up to deliver</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
