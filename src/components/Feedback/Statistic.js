import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

class Statistic extends Component {
  feedbackPercentage = () => {
    const count = (this.props.good * 100) / this.props.total;
    return Math.round(count);
  };

  render() {
    return (
      <div>
        <h3 className={styles.statistic_title}>Statistic</h3>

        <table className={styles.statistic}>
          <tr>
            <td>Good</td>
            <td>{this.props.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{this.props.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{this.props.bad}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{this.props.total}</td>
          </tr>
        </table>

        <p className={styles.voiting_percent}>
          Positive feedback: {this.feedbackPercentage()} %
        </p>
      </div>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Statistic;
