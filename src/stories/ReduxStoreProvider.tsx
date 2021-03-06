import React from 'react'
import { Provider } from 'react-redux'
import store from '../p2-homeworks/h10/bll/store'


export const ReduxStoreProvider = (storyFN:any) => {
    return <Provider store = {store}>{storyFN()}</Provider>
}