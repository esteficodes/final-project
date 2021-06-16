import React, {useEffect} from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API_URL } from '../reusable/urls'

import user from '../reducers/user'


const Main = () => {
    const accessToken = useSelector(store => store.user.accessToken)

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        batch(() => {
            dispatch(user.actions.setUsername(null))
            dispatch(user.actions.setAccessToken(null))

            localStorage.removeItem('user')
        })
    }

    useEffect(() => {
        if (!accessToken) {
            history.push('/signin')
        }
    }, [accessToken, history]) 

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: accessToken 
            }
        }

        fetch(API_URL('resources'), options) 
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    batch(() => {
                        dispatch(thoughts.actions.setThoughts(data.thoughts))
                        dispatch(thoughts.actions.setErrors(null))
                    })
                } else {
                    dispatch(thoughts.actions.setErrors(data))
                }
            })
    }, [accessToken, dispatch])

    return (
        <div>
            Main site
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Main