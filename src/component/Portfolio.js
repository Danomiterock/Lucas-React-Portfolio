import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import PropTypes from "prop-types";
const styles = {
    card: {width: "18rem" }
};

const Portfolio = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col mb={4}>
          <div>
            <Card style={styles.card}>
              <Card.Img variant="top" src={Portfolio.image} alt={Portfolio.alt}/>
              <Card.Body>
                <Card.Title>{Portfolio.title}</Card.Title>
                <Card.Text>
                  {Portfolio.body}
                </Card.Text>
                <a href={Portfolio.link}>Click Here!</a>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )};

Portfolio.propTypes = {};

export default Portfolio;
