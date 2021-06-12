import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import user from '../reducers/user'

//import the API url

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mode, setMode] = useState(null)

    const accessToken= useSelector(store => store.user.accessToken)
    const dispatch = useDispatch()
    const history = useHistory()
    const errors= useSelector(store => store.user.errors)

    useEffect(() => {
        if (accessToken) {
            history.push('/welcome')
        }
    }, [accessToken, history])

    const onFormSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers:{
               'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password})
        }
        //fetch
    }

    return (
        <div>It's great that you are joining!</div>
    )
}
export default SignUp