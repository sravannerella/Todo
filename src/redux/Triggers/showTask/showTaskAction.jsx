import { SHOW_TASK, CLOSE_TASK } from "./showTaskConstants";

export const showTask = (task) => ({
    type: SHOW_TASK,
    task
});

export const closeTask = () => ({
    type: CLOSE_TASK
})