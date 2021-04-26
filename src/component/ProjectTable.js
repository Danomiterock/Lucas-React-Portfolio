import React from "react";
import { Container, Table } from "react-bootstrap";
import moment from "moment";

function ProjectTable({ projects }) {
  // const localProjects = projects.length > 0 && projects
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Text</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            return (
              <tr key={project.phone}>
                <td>
                  <img src={project.picture.medium} alt={project.name.last} />
                </td>
                <td>
                  {project.name.first} {project.name.last}
                </td>
                <td>{project.phone}</td>
                <td>{project.email}</td>
                <td>{moment(project.dob.date).format("MMMM Do, YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProjectTable;
