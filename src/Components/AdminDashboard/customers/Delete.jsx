
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const Delete = ({ onDelete }) => {
    return (
        <FaTrash
            onClick={onDelete}
            className="cursor-pointer text-gray-500 hover:text-red-500"
        />
    );
};

// Adding PropTypes validation
Delete.propTypes = {
    onDelete: PropTypes.func.isRequired
};

export default Delete;
