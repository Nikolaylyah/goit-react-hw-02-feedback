import PropTypes from 'prop-types';
import s from './FeedbackBtn.module.css';

const FeedbackBtn = ({ data, onBtnClick }) => {
  return (
    <button
      className={s.feedbackBtn}
      type="button"
      name={data}
      onClick={onBtnClick}
    >
      {data}
    </button>
  );
};

FeedbackBtn.propTypes = {
  data: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackBtn;
