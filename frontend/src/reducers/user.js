import { appendToMemberExpression } from '@babel/types'
import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux'
import { API_URL } from 'reusable/urls'

const initialState = localstorage.getItem('user')
  ? {
      username: JSON.parse(localStorage.getItem('user')).username,
      accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
      errors: null
  }
  : {
    username: null,
    accessToken:null,
    errors:null
  }

  const user = createSlice ({
      name: 'user',
      initialState,
      reducers: {
          setUsername: (store, action) => {
              store.username = action.payload
          },
          setAccessToken: (store, action) => {
              store.acessToken = action.payload
          },
          setErrors: (store, action) => {
              appendToMemberExpression.errors = action.payload
          }
      }
  })

  export const sign = (username, password, mode) => {
      return (dispatch, getStore) => {
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password})
          }

          //fetch
      }
  }

  export default user