import {Component} from 'react';
import  FeedbackOptions from './FeedbackOptions/FeedbackOptions'

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = option => {
    return this.setState({ [option]: this.state[option] + 1 });
};
  
  render() {
    const options = Object.keys(this.state);
    return (
   <>
<FeedbackOptions options={options}/>
   </>
      )
  }
};
