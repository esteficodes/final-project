import React, { useEffect} from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import { API_URL } from 'reusable/urls'

import user from '../reducers/user'
import resources from '../reducers/resources'

const Welcome = () => {
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
              Authorization: 'accessToken'
            }
        }
      
        fetch(API_URL('resources'), options)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
                batch(()=> {
                  dispatch(resources.actions.setResources(data.resources))
                  dispatch(resources.actions.setErrors(null))
                })
            } else {
                dispatch(resources.actions.setErrors(data))
            }
          })
    }, [accessToken, dispatch])

    return (
      <div>welcome
        <h3 className="welcome-title">You can enter the memberarea <Link to="/main">here</Link></h3>
        <button onClick={logout}>Logout</button>
      </div> //in this site we welcome users and diplay two main options > see the available resources and see what's hot (info from external apis)
    )
}

export default Welcome