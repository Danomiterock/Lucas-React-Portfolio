import { Col, Container, Row } from "react-bootstrap";
import imageURL from "../assets/image/Portrait.jpg";
const styles = {
  wrapper: { background: "#333333", color: "#CCCCCC" },
  hr: { width: "40px", height: "2px", color: "orange" },
  portrait: { width: "400px", height: "auto", borderRadius: "10%", borderShadow: "10px"},
};
const Bio = () => {
  return (
    <div style={styles.wrapper}>
      <Container fluid>
        <Row>
          <Col mb={4}>
            <h1>Dan Lucas</h1>
            <hr />
           
          </Col>
          <Col mb={4}>
            <img style={styles.portrait} src={imageURL} alt="Dan Lucas Portrait" />
          </Col>
          <Col mb={4}>
            <h2>Full Stack Developer</h2>
            <hr />
            {/* <p>
              {""}
              Mr. Lucas is a certified MERN developer with skill sets including HTML, CSS, Bootstrap, Wordpress, jQuery, JavaScript, Handlebars, and more...
            </p> */}
          </Col>
        </Row>
        <div>
          <h2>Bio</h2>
          <p>
              {" "}
              Daniel Lucas is a former Tucson Police officer, who specializes in
              many forms of communication. With over seven years in patrol based
              in Operations Division Midtown (ODM), Officer Lucas became the ODM
              Community Resource Officer (CRO). During this time, he was
              responsible for logistics in a Division of over 70 sworn officers.
              He also served as a liason between the Division and the local
              neighborhood associations and City Ward offices.
              <br />
              <br /> Due to his success as the ODM CRO, he was tapped to work in
              the Chief's office as a Public Information Office (PIO) where he
              fulfilled public records requests. He also served as a liason and
              spokesperson to the locally and nationally syndicated media.
              Officer Lucas managed communication by facilitating interviews
              with department personnel, giving statements both on and off
              camera, and creating content for the Department's social media
              platforms including Facebook, Twitter, and NextDoor.
              <br />
              <br /> He also worked at the Southern Arizona Law Enforcement
              Training Center (SALETC) as a class counselor for police recruits.
              During his time at SALETC, he did performance evaluations, trained
              recruits physically and academically.Officer Lucas left the
              Department to pursue other interests.
              <br />
              <br /> As a civilian, Mr Lucas sees his next evolution will focus
              on computer technology. He will bring his strong communication
              background to bear with any project in which he participates. Mr.
              Lucas holds an Associates Degree in the Applied Science of Law
              Enforcement from Pima Community College, and a Bachelor of Science
              in Organizational Leadership and Management from Regent
              University.
            </p>
        </div>
      </Container>
    </div>
  );
};

export default Bio;
