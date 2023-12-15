// FeaturesSection.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// You can define your features here, or they could come from props or state
const features = [
  {
    title: "Fast Delivery",
    description:
      "Get your food delivered in under 30 minutes with our quick delivery service.",
    imageUrl: "https://source.unsplash.com/featured/?food",
  },
  {
    title: "Quality Ingredients",
    description: "We source the best and freshest ingredients for your meals.",
    imageUrl: "https://source.unsplash.com/featured/?ingredients",
  },
  {
    title: "Diverse Menu",
    description:
      "Choose from a wide variety of cuisines to satisfy any craving.",
    imageUrl: "https://source.unsplash.com/featured/?menu",
  },
  // ... Add more features as needed
];

const FeaturesSection: React.FC = () => {
  return (
    <Container className="my-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Img variant="top" src={feature.imageUrl} />
              <Card.Body className="feature-card-body">
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text className="feature-card-text">
                  {feature.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
