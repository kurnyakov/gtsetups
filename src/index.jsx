import React from 'react';

import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import TemplateContainer from './components/TemplateContainer';

const renderApp = (Component) => {
  render(

zzz,

    <AppContainer>
        <div>
              <Component />
        </div>
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

