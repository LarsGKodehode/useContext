// Libraries
import { Outlet } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';

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
  return (
    <div className="App">
      <Navbar {...navbarProps} />
      <Outlet />
    </div>
  );
};

export default App