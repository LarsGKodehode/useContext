// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// CSS
import './index.css';

// Context
import { CountContext } from './Context/counterContext';

// Components
import App from './App';
import Page1 from './routes/Page1/Page1';
import Page2 from './routes/Page2/Page2';
import Page3 from './routes/Page3/Page3';
import Missing404 from './routes/Missing404/Missing404';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode >
    <CountContext.Provider value={{count: 0}}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>

            <Route path='Page1' element={<Page1 />} />
            <Route path='Page2' element={<Page2 />} />
            <Route path='Page3' element={<Page3 />} />


          </Route>

          <Route path='*' element={<Missing404 />} />

        </Routes>
      </Router>
    </CountContext.Provider>
  </React.StrictMode>
);
