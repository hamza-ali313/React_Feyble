import React from 'react'

const Todos = ({ todos, addtodo }) => {
    console.log("rendered")
    return (
        <div>
            {todos.map((todo,index) => (
                <p key={index}>{todo+ " " + index}</p>
            ))}
            <button onClick={addtodo}>
                add to todo
            </button>
        </div>
    )
}

export default Todos