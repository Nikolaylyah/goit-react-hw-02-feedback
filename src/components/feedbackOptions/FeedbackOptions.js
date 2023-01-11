import PropTypes from 'prop-types';
import FeedbackBtn from '../feedbackBtn/FeedbackBtn';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.feedback}>
      {options.map((option, index) => (
        <FeedbackBtn key={index} data={option} onBtnClick={onLeaveFeedback} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
