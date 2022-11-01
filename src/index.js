import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@components/App'
import { client } from '@apollo-folder/client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
