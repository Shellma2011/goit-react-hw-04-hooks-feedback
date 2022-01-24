import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  // const onLeaveFeedbackGood = () => {
  //   setGood(prevState => prevState + 1);
  // };

  // const onLeaveFeedbackNeutral = () => {
  //   setNeutral(prevState => prevState + 1);
  // };

  // const onLeaveFeedbackBad = () => {
  //   setBad(prevState => prevState + 1);
  // };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
