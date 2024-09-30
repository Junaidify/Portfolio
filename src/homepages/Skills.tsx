import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/icons8-javascript-48.png";
import ts from "../images/typescript.png";
import java from "../images/icons8-java-48.png";
import react from "../images/icons8-react-js-100.png";
import redux from "../images/redux.png";
import node from "../images/node.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/icons8-mysql-50.png";
import express from "../images/express.png";
import tailwind from "../images/icons8-tailwind-css-48.png";
import bootstrap from "../images/icons8-bootstrap-50.png";
import chakra from "../images/icons8-chakra-ui-48.png";

const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>

      <div className="skills_container">
        <div className="skills_content">
          <h2>Frontend</h2>
          <div className="skills_img">
            <img className="skills_img_tag" src={html} alt="" />
            <img className="skills_img_tag" src={css} alt="" />
            <img className="skills_img_tag" src={js} alt="" />
            <img className="skills_img_tag" src={ts} alt="" />
            <img className="skills_img_tag" src={react} alt="" />
            <img className="skills_img_tag" src={redux} alt="" />
            <img className="skills_img_tag" src={tailwind} alt="" />
            <img className="skills_img_tag" src={bootstrap} alt="" />
            <img className="skills_img_tag" src={chakra} alt="" />
          </div>
        </div>
        <div className="skills_content">
          <h2>Backend</h2>
          <div className="skills_img">
            <img src={node} alt="" />
            <img src={express} alt="" />
            <img src={mongodb} alt="" />
            <img src={mysql} alt="" />
            <img src={js} alt="" />
            <img src={java} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
