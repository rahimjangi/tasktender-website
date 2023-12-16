// CarouselSection.tsx
import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselSection: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="../../assets/Handyman.jpg"
          src={require("../../assets/images/Handyman.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Handyman</h3>
          <p>
            Whether you have experience in a trade or are skilled with your
            hands, you can make money in the gig economy by offering your
            handyman services in your local community. There is also a need for
            people who can assemble furniture, fix leaky faucets, or help with
            small home improvements.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
