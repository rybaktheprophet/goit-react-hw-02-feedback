import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

class Notification extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
