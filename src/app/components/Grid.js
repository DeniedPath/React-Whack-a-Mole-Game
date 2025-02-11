import Mole from './Mole';
import PropTypes from 'prop-types';

const Grid = ({ grid, onMoleClick }) => {
    return (
        <div className="game-grid">
            {grid.map((isMole, index) => (
                <Mole 
                    key={`mole-${index}-${isMole}`} 
                    isVisible={isMole} 
                    onClick={() => onMoleClick(index)} 
                />
            ))}
        </div>
    );
};
Grid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onMoleClick: PropTypes.func.isRequired,
};

export default Grid;

