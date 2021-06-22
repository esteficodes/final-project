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
        },
        setName: (store, action) => {
          store.name = action.payload
        },
        setLanguage:(store, action) => {
            store.language = action.payload
        },
        setType: (store, action) => {
            store.type = action.payload
        },
        setFree: (store, action) => {
          store.free = action.payload
        },
        setOnline: (store, action) => {
          store.online = action.payload
        },
        setDescription: (store, action) => {
            store.description = action.payload
        },
        setUrl: (store, action) => {
            store.url = action.payload
        }
    
    }
})

export default resources
