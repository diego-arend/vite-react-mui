import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
// import SingIn from './pages/unauthenticated/singin/SingIn';
import ThemeCustomProvider from './contexts/theme/ThemeCustomProvider';
import App from './pages/authenticated/app/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeCustomProvider>
      {/* <SingIn /> */}
      <App />
    </ThemeCustomProvider>
  </React.StrictMode>,
);
