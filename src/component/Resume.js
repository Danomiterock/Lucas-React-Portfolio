import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
  }
};

const Resume = () => {
  return (
    <div style={styles.wrapper}>
      <Container fluid>
        <Row>
          <Col mb={4} style={styles.cardDeck}>
            <Card
              style={styles.card}
              key="resume"
              className="block-example border border-dark"
            >
              <Card.Img
                variant="top"
                src="assets/image/hiring.jpg"
                alt="hiring"
              />
              <Card.Body>
                <Card.Title>You're almost there!</Card.Title>
                <Card.Text>View my resume!</Card.Text>
                <a href="assets/resume/Daniel-Lucas-Resume.pdf">Click Here!</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
