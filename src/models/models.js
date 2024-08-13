import PropTypes from 'prop-types';

// Define PropTypes for a Todo object
const todoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
});

// Example usage in a component
const SingleTodo = ({ todo }) => {
  return (
    <div>
      <span>{todo.todo}</span>
    </div>
  );
};

SingleTodo.propTypes = {
  todo: todoShape.isRequired
};
