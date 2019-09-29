import { ADD_TASK, REMOVE_TASK } from "./constants";

export const addToTasks = (title, boardId) => ({
    type: ADD_TASK,
    body: {
        title, boardId,
        assignedTo: 'Sravan Nerella',
        priority: "High",
        description: '',
        completed: false,
        dueDate: new Date().toDateString()
    }
});

export const removeTasks = (taskId) => ({
    type: REMOVE_TASK,
    taskId
});
