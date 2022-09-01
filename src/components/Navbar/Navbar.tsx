// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Types
import { CSSProperties } from 'react';
import { NavbarProps } from '../../@types/types';

// Components
import CounterGUI from '../CounterGUI/CounterGUI';


/**
 * Navbar for displaying navigation links
 */
function Navbar(props: NavbarProps): JSX.Element {
  // Destructure wanted variables
  const { links } = props;
  
  // Construct link props
  const linkStyle: CSSProperties = {
    margin: "1em",
  };

  // Create all links
  const StyledLinks = links.map((entry) => {
    return(
      <Link
        to={entry.to}
        style={linkStyle}
      >
        {entry.title}
      </Link>
    );
  });

  // Set styling
  const listStyle: CSSProperties = {
    padding: '0px',
  };

  return(
    <nav>
      <ul style={listStyle}>
        {React.Children.toArray(StyledLinks)}
      </ul>
      <CounterGUI />
    </nav>
  );
};

export default Navbar;