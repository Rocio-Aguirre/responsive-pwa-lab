import React from 'react';
import './css/styles.css';
import AppRouter from './router/AppRouter.js';
// import StoreProvider from './store/StoreProvider';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    // <StoreProvider>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
    <AppRouter/>
    </ThemeProvider>
  // </StoreProvider>
  );
}

export default App;
