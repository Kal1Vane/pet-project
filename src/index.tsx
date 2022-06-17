import React from 'react';
import App from './components/app/app';
import * as ReactDOMClient from 'react-dom/client';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './components/browser-history/browser-history';
import { Provider } from 'react-redux';
import { store } from './store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <App />
        </LocalizationProvider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
