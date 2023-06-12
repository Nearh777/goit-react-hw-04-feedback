import React, { useState } from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './Feedback.styled';




export const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const hendleStat = event => {
    const counter = prevState => prevState + 1;
    switch (event) {
      case 'good':
        setGood(counter);
        break;
      case 'neutral':
        setNeutral(counter);
        break;
      case 'bad':
        setBad(counter);
        break;
      default:
    }
  };


  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );


  return (
    <Container>
      <Section title="Будь ласка, залиште відгук" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={hendleStat}
      />
      <Section />
      <Section title="Статистика" />
      {countTotalFeedback ? (
        
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        
      ) : (
        <Notification message="Зворотного зв'язку немає" />
      )}
    </Container>
  );

}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};









// export class Feedback extends Component {
//   static propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   hendleStat = ({ currentTarget: { name } }) => {
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   // handleGood = () => {
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //   }));
//   // };
//   // handleNeutral = () => {
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));
//   // };
//   // handleBad = () => {
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   // };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, val) => acc + val, 0);
//   countPositiveFeedbackPercentage = () =>
//     Math.floor((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotal = this.countTotalFeedback(this.props);
//     const positiveFeedback = this.countPositiveFeedbackPercentage(this.props);
//     const onLeaveFeedback = this.hendleStat;

//     return (
//       <Container>
//         <Section title="Будь ласка, залиште відгук" />
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={onLeaveFeedback}
//         />
//         <Section />
//         <Section title="Статистика" />
//         {countTotal ? (
//           <>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotal}
//               positivePercentage={positiveFeedback}
//             />
//           </>
//         ) : (
//           <Notification message="Зворотного зв'язку немає" />
//         )}
//       </Container>
//     );
//   }
// }
