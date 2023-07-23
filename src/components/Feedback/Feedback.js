import React, { Component } from "react";

import Statistic from "./Statistic";
import Notification from "./Notification";
import Options from "./Options";
import Section from "./Section";

import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVoiting = (event) => {
    console.log("click: ", event.target.value);

    if (event.target.value === "good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
      console.log("Feedback ~ this.setState ~ good === ", this.state.good);
    }

    if (event.target.value === "neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (event.target.value === "bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const count = this.state.good + this.state.neutral + this.state.bad;
    return count || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div className={styles.feedbackBlock}>
        <Section title="Please leave feedback" />
        <Options onLeaveFeedback={this.handleVoiting} />

        {this.countTotalFeedback() ? (
          <Statistic good={good} neutral={neutral} bad={bad} total={total} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
