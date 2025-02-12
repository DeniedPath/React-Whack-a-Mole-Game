import React from 'react';
import PropTypes from 'prop-types';

const Mole = ({ isVisible, onClick }) => {
    return (
        <button
            className={`grid-item ${isVisible ? "mole" : ""}`}
            onClick={onClick}
        />
    );
};
Mole.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Mole;
