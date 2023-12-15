import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light pt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Task Tinder</h5>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Get Help</a>
              </li>
              <li>
                <a href="#">Buy gift cards</a>
              </li>
              <li>
                <a href="#">Add your skills</a>
              </li>
              <li>
                <a href="#">Sign up to work</a>
              </li>
              <li>
                <a href="#">Create a business account</a>
              </li>
              <li>
                <a href="#">Promotions</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Restaurants near me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">View all cities</a>
              </li>
              <li>
                <a href="#">View all countries</a>
              </li>
              <li>
                <a href="#">Pickup near me</a>
              </li>
              <li>
                <a href="#">About Uber Eats</a>
              </li>
            </ul>
            <div>
              <a href="#">English</a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Insert App Store SVG or image */}
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Insert Google Play SVG or image */}
            </a>
          </Col>
          <Col md={6} className="text-md-right">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Insert Facebook SVG or image */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Insert Twitter SVG or image */}
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Insert Instagram SVG or image */}
            </a>
          </Col>
        </Row>
        <Row className="mt-4 border-top pt-3">
          <Col md={6}>
            <p>&copy; 2023 Uber Technologies Inc.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#">Privacy Policy</a>
            <a href="#" className="mx-2">
              Terms
            </a>
            <a href="#">Pricing</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
