import axios from 'axios';
import {GET_TASKS, DELETE_TASK, ADD_TASK} from './types';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// Get Tasks
export const getTasks = ()  => dispatch => {
    axios.get('/api/tasks')
        .then(res => {
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}
// delete Task

export const deleteTask = id => dispatch =>{
    axios
    .delete(`/api/tasks/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }).catch(err => console.log(err));
}

// add Task
export const addTask = (task) => dispatch => {
    console.log("TASK:",task)
    axios
    .post("/api/tasks/", task)
    .then(res => {
        dispatch({
            type: ADD_TASK,
            payload: res.data
        })
    }).catch(err => console.log(err));
}