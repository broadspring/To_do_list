import React from "react";

function TodoItem(props) {
  return (
    <div className="Todo-item">
      {props.item}
    </div>
  )
}

export default TodoItem