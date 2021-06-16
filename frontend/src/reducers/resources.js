import { createSlice } from '@reduxjs/toolkit'

const resources = createSlice({
    name: 'resources',
    initialState:{
        items: [],
        errors: null
    },
    reducers: {
        setResources: (store, action) => {
            store.items = action.payload
        },
        setErrors: (store, action) => {
            store.errors = action.payload
        }
    }
})

export default resources