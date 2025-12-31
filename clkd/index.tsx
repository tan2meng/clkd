import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Although using CDN, we keep the import to allow Vite to bundle if needed, though Tailwind CDN handles styling.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);