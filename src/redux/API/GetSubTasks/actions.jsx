import { GET_SUBTASKS } from './constants';

export const getSubTasks = (id) => ({
    type: GET_SUBTASKS,
    id
})