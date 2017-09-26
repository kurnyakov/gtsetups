import React from 'react';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import DevTools from './components/shared/DevTools';
import configureStore from './store';

import TemplateContainer from './components/TemplateContainer';

const Store = configureStore();

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <div>
          <Component />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(TemplateContainer);

if (module && module.hot) {
  module.hot.accept('./components/TemplateContainer', () => {
    renderApp(TemplateContainer);
  });
}
