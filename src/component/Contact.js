import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../contacts.json"
const styles = {
    card: {width: "18rem", padding: "20px"},
    wrapper: { background: "#333333", color: "#CCCCCC" },
};

const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col mb={4}>
          <div style={styles.wrapper}>
            {data.map(contacts => 
             (
            <Card style={styles.card} key={contacts.id}>
              <Card.Img variant="top" src={`assets/image/${contacts.image}`} alt={contacts.alt}/>
              <Card.Body>
                 <a href={contacts.link}>Click Here!</a>
              </Card.Body>
            </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
