// Libraries
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

// Types
import { NavbarProps } from "../../@types/types";

// Components
import CounterGUI from "../CounterGUI/CounterGUI";

function Navbar(props: NavbarProps): JSX.Element {
  const { links } = props;
  
    const style: CSSProperties = {
      margin: "1em",
    };

  const StyledLinks = links.map((entry) => {
    return(
      <Link
        to={entry.to}
        style={style}
      >
        {entry.title}
      </Link>
    );
  });

  return(
    <nav>
      <ul>
        {React.Children.toArray(StyledLinks)}
      </ul>
      <CounterGUI />
    </nav>
  );
};

export default Navbar;