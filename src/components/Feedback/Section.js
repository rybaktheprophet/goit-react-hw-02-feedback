import React, { Component } from "react";
import PropTypes from "prop-types";

import Options from "./Options";
import styles from "./Feedback.module.css";

class Section extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

Section.defaultProps = {
  title: "Please leave feedback",
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
