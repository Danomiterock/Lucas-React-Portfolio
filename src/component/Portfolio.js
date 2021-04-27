import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../projects.json"
const styles = {
    card: {width: "18rem" }
};

const RenderPortfolio = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col mb={4}>
          <div>
            {data.map(portfolio => 
             (
            <Card style={styles.card}>
              <Card.Img variant="top" src={portfolio.image} alt={portfolio.alt}/>
              <Card.Body>
                <Card.Title>{portfolio.title}</Card.Title>
                <Card.Text>
                  {portfolio.body}
                </Card.Text>
                <a href={portfolio.link}>Click Here!</a>
              </Card.Body>
            </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )};


export default RenderPortfolio;
