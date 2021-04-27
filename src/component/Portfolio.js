import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../projects.json"
const styles = {
    card: {width: "18rem", padding: "20px"},
    wrapper: { background: "#333333", color: "#CCCCCC" },
};

const RenderPortfolio = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col mb={4}>
          <div style={styles.wrapper}>
            {data.map(portfolio => 
             (
            <Card style={styles.card} key={portfolio.id}>
              <Card.Img variant="top" src={`assets/image/${portfolio.image}`} alt={portfolio.alt}/>
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
