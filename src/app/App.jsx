'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
// import persistStore from 'redux-persist/es/persistStore';

const App = ({children}) => {
  // let persistor = persistStore(store)
  return (
    <Provider store={store}>
              {/* <PersistGate persistor={persistor}> */}
      {children}
              {/* </PersistGate> */}
      </Provider>
  )
}

export default App