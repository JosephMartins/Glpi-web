import React from 'react';
// o BroserRouter serve para resolver um problema de rotas que antigamente utilizava-se Hash antes da rotas com ele nao mais
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
