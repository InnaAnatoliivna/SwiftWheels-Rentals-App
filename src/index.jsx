import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
  persistor,
  store
} from './redux/store'
import { App } from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename='/SwiftWheels-Rentals-App/'>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

