import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <div>Good: {good}</div>
            <div>Neutral:{neutral}</div>
            <div>Bad: {bad}</div>
            <span>Total:{total} </span>
            <div>Positive feedback: {positivePercentage.toFixed(2)} %</div>
        </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;