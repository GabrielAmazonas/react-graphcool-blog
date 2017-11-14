import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import { GC_AUTH_TOKEN } from './constants'

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cj9mug9364j7g0159fbwwx07q'}),
    cache: new InMemoryCache(),
  });

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker()