import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <div>
      {optionsKeys.map(optionKey => (
        <button
          type="button"
          key={optionKey}
          onClick={() => {
            handleFeedback(optionKey);
          }}
        >
          {optionKey}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.object.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
