import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../contacts.json";
const styles = {
  card: { width: "18rem", padding: "20px" },
  wrapper: { background: "#333333", color: "#CCCCCC" },
};

const Resume = () => {
  return (
    <Container fluid>
      <Row>
        <Col mb={4}>
          <div style={styles.wrapper}>
            <a href="assets/resume/Daniel-Lucas-Resume.jpg">Click Here!</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
