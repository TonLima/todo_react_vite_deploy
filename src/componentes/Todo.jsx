import PropTypes from "prop-types";

function Todo({ todo, removeToDo,completeToDo }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}} >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeToDo(todo.id)} >Completar</button>
        <button className="remove" onClick={() => removeToDo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  removeToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired,
};

export default Todo;