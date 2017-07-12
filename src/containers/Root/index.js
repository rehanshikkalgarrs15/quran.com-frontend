import React, { PropTypes } from 'react';
import Provider from 'react-redux/lib/components/Provider';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import getLocalMessages from 'helpers/setLocal';

const Root = ({ store }) => (
  <IntlProvider locale="en" messages={getLocalMessages()}>
    <Provider store={store} key="provider">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object // eslint-disable-line
};

export default Root;
