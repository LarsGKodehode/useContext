// Libraries
import { Outlet } from 'react-router-dom';

// CSS
import './App.css';

// Types
import { CountContextType } from './@types/types';

// Context
import { CountContext } from './Context/counterContext';

// Components
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

// Unchanging between build
const navbarLinks = [
  {to: 'Page1', title: 'Page1'},
  {to: 'Page2', title: 'Page2'},
  {to: 'Page3', title: 'Page3'},
];
const navbarProps = {
  links: navbarLinks,
};

function App() {
  // State managment
  const [count, setCount] = useState(0)

  const initialContext: CountContextType = {
    count,
    setCount,
  };

  return (
    <CountContext.Provider value={initialContext}>
      <div className="App">
        <Navbar {...navbarProps} />
        <Outlet />
      </div>
    </CountContext.Provider>
  );
};

export default App