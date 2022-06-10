import React from 'react';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
