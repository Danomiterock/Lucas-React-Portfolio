import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../contacts.json";
const styles = {
  card: {
    width: "100%",
    height: "100%",
    borderRadius: "5%",
    borderShadow: "5px",
    textAlign: "center",
  },
  wrapper: { background: "#333333", color: "#CCCCCC", height: "100%", width: "100%"  },
};

const Contact = (props) => {
  return (
    <div style={styles.wrapper}>
      <Container fluid>
        <Row>
          {data.map((contacts) => (
            <Col xs={1} md={2} lg={3}>
              <Card
                style={styles.card}
                key={contacts.id}
                className="block-example border border-dark"
              >
                <Card.Img
                  variant="top"
                  src={`assets/image/${contacts.image}`}
                  alt={contacts.alt}
                />
                <Card.Body>
                  <a href={contacts.link}>Click Here!</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
