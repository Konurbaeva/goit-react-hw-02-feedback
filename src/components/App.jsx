import {Component} from 'react';
import  FeedbackOptions from './FeedbackOptions/FeedbackOptions'

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  handleChosenOption = option => {
    return this.setState({ [option]: this.state[option] + 1 });
};
  
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>
// 9:27
// Anna  [1:42 PM]
// У меня в options={} передается массив
// const options = Object.keys(this.state);
// А в onLeaveFeedback={} функция обработчик
// onLeaveFeedback={this.handleChosenOption}, которая обновляет state в App при нажатии любой опции.


  render() {
    const options = Object.keys(this.state);
    return (
   <>
<FeedbackOptions options={options} onLeaveFeedback={this.handleChosenOption}/>
   </>
      )
  }
};
