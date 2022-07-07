import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChosenOption = option => {
    return this.setState({ [option]: this.state[option] + 1 });
  };

  render() {
    const options = Object.keys(this.state);
    console.log('options: ', options);
    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleChosenOption}
        />
      </>
    );
  }
}
