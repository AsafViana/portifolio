import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
    <React.Fragment>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="project"
      >
        <Link to={link}>
          <div className="project-container">
            <div className="project-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </Link>
      </motion.div>
    </React.Fragment>
  );
};

export default Project;
