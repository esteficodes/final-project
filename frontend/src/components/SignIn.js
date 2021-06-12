import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import { sign } from '../reducers/user'

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mode, setMode] =useState(null)

    const accessToken= useSelector(store => store.user.accessToken)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }   
    }, {accessToken, history})

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(sign(username, password, mode))
    }

    return (
        <div>Sign in here!</div>
    )
}

export default SignIn
