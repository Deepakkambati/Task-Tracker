import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3 onClick={() => onToggle(task.id)}>{task.title}</h3>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
