// Libraries
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// CSS
import './App.css';

// Types
import { CountContextType } from './@types/types';

// Context
import { CountContext } from './Context/counterContext';

// Components
import Navbar from './components/Navbar/Navbar';

// Unchanging between build, uncertain about placing them here or inside the function
// I think that by placing them outside they only get parsed once,
// rather than on each component rerender
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

  // Setup initial context
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

export default App;