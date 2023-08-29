import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const TestimonialsPage: React.FC = () => {
  return (
    <section id="testimonials">
      <Container>
        <Row>
          <Col>
            <h2>What Our Customers Say</h2>
            <Carousel>
              <Carousel.Item>
                <p>"The food was absolutely delicious and the presentation was beautiful. Highly recommend!"</p>
                <h3>Jane Smith</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>"I couldn't be happier with the service and quality of food. Everyone at the party raved about it!"</p>
                <h3>John Doe</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>"Their farmer market stand has the freshest produce and best prices in town. Love supporting local!"</p>
                <h3>Susan Lee</h3>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsPage;