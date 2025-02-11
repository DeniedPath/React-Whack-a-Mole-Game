import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({ score }) => {
    return(
        <div className="scoreboard">
            <h2>Score: {score}</h2>
        </div>
    );
};
ScoreBoard.propTypes = {
    score: PropTypes.number.isRequired,
};

export default ScoreBoard;