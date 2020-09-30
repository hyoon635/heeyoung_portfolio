import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ProjectList.scss";
import dia from "../assets/imgs/projects/project_dia.png";
import dm from "../assets/imgs/projects/project_dm.png";
import doctors from "../assets/imgs/projects/project_doctors.png";
import gdm from "../assets/imgs/projects/project_appbook_gdm.png";
import t2dm from "../assets/imgs/projects/project_appbook_t2dm.png";
import homepage from "../assets/imgs/projects/project_homepage.png";
import portfolio from "../assets/imgs/projects/project_portfolio.png";


function ProjectList({ id, title, type, useTech, introduce, link }) {


  return (
    <div className="projects__card">
      <Row>
        <Col xs={12} md={6} className="col">
          <div className="img-wrapper">
            {id === 0 && <img src={dia} alt={title} />}
            {id === 1 && <img src={dm} alt={title} />}
            {id === 2 && <img src={doctors} alt={title} />}
            {id === 3 && <img src={gdm} alt={title} />}
            {id === 4 && <img src={t2dm} alt={title} />}
            {id === 5 && <img src={homepage} alt={title} />}
            {id === 6 && <img src={portfolio} alt={title} />}
          </div>
        </Col>
        <Col xs={12} md={6} className="col">
          <div className="title">
            <span className="type">{type} |</span> {title}
          </div>
          <div className="tech">
            {useTech.map((tech, index) => (
              <div key={index} className="tech__item">
                <div className="icon-wrapper">
                  <img src={tech.icon} />
                </div>
              </div>
            ))}
          </div>
          <div className="indroduce">
            <p>{introduce}</p>
          </div>
          <div className="link">
            {link.map((link, index) => (
              <a key={index} href={link} target="_balnk">
                {type === "App" && <button className="market"></button>}
                {type === "Web" && <button className="web">Visit</button>}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ProjectList;
