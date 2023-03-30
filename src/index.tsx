import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import { Root } from './Root';

import api from 'api';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={api.client}>
        <Root />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
