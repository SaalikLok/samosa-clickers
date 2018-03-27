import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri: "https://api.graph.cool/simple/v1/cjf9sd3pe129901855epolhqc"
  });

ReactDOM.render(<ApolloProvider><App /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
