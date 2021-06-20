import React from 'react';
import { batch, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import user from '../reducers/user';

const Logout = () => {
    const dispatch = useDispatch();

    const onButtonClick = () => {
        batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));

            localStorage.removeItem('user');
        })
       
    };

    return (
        <Link to="/">
        <div>
            <button onClick={onButtonClick}>Logout</button>
        </div>
        </Link>
    )
}

export default Logout;