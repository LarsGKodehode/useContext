// Types
import { CSSProperties, useContext } from "react";
import { CounterGUIProps } from "../../@types/types";
import { CountContext } from "../../Context/counterContext";


// Custom SVGs
const svgProps = {
  width: "100",
  height: "100",
}


function CounterGUI(props: CounterGUIProps): JSX.Element {
  // Grab refrence to counterContext
  const {count, setCount} = useContext(CountContext);

  // Handlers
  function handleIncrement(): void {
    setCount(previousValue => previousValue + 1);
  };

  function handleDecrement(): void {
    setCount(previousValue => previousValue - 1);
  };

  // Construct props
  const incrementProps = {
    ...svgProps,
    onClick: handleIncrement,
  };
  
  const decrementProps = {
    ...svgProps,
    onClick: handleDecrement,
  };

  const guiStyle: CSSProperties = {
    border: '1px solid green',
    borderRadius: '10px'
  };

  // Create buttons, should probably be extracted into one component
  function SVGIncrement(): JSX.Element {
    return(
      <svg {...incrementProps}>
        <circle
          cx={"50"}
          cy={"50"}
          r={"25"}
  
          fill={"green"}
        />
      </svg>
    );
  };
  
  function SVGDecrement(): JSX.Element {
    return(
      <svg {...decrementProps}>
        <circle
          cx={"50"}
          cy={"50"}
          r={"25"}
  
          fill={"red"}
        />
      </svg>
    );
  };

  return(
    <div
      style={guiStyle}
    >
      <SVGIncrement />
      <SVGDecrement />
    </div>
  );
};

export default CounterGUI;