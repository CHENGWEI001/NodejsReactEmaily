import axios from 'axios';
import { FETCH_USER } from './types';

// https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7605096?start=440
export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER,payload: res}));
    }
};

// without redux-thunk
// const fetchUser = () => {
//     const request = axios.get('/api/current_user'); 
    
//     return {
//         type: FETCH_USER,
//         payload: request
//     };
// };