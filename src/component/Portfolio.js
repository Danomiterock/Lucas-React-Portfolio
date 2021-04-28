import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../projects.json";
const styles = {
  card: {
    width: "18rem",
    padding: "20px",
    borderRadius: "5%",
    borderShadow: "5px",
  },
  wrapper: {
    background: "#333333",
    color: "#CCCCCC",
    height: "100%",
    width: "100%",
  },
  cardDeck: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

const Portfolio = (props) => {
  return (
    <div style={styles.wrapper}>
      <Container fluid>
        <Row style={styles.cardDeck}>
          {data.map((portfolio) => (
            <Col xs={1} md={3} lg={4}>
              <Card
                style={styles.card}
                key={portfolio.id}
                className="block-example border border-dark"
              >
                <Card.Img
                  variant="top"
                  src={`assets/image/${portfolio.image}`}
                  alt={portfolio.alt}
                />
                <Card.Body>
                  <Card.Title>{portfolio.title}</Card.Title>
                  <Card.Text>{portfolio.body}</Card.Text>
                  <a href={portfolio.link}>Click Here!</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
