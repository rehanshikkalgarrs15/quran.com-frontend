import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import getLocalMessages from 'helpers/setLocal';

const Root = ({ client, store }) => (
  <IntlProvider locale="en" messages={getLocalMessages()}>
    <ApolloProvider client={client} store={store} key="provider">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object, // eslint-disable-line
  client: PropTypes.object // eslint-disable-line
};

export default Root;
