import axios from 'axios';
import { FETCH_USER } from './types';

// https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7605096?start=440
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER,payload: res.data});
}

// without redux-thunk
// const fetchUser = () => {
//     const request = axios.get('/api/current_user'); 
    
//     return {
//         type: FETCH_USER,
//         payload: request
//     };
// };