import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

class OptionItem extends Component {
  render() {
    return (
      <button
        className={styles.button}
        key={this.props.key}
        value={this.props.value}
        onClick={this.props.onLeaveFeedback}
      >
        {this.props.label}
      </button>
    );
  }
}

OptionItem.defaultProps = {
  label: "Button",
};

OptionItem.propTypes = {
  label: PropTypes.string,
  key: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default OptionItem;
