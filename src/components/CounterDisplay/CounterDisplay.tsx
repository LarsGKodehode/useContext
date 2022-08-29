// Libraries
import { useContext } from "react";

// Types
import { CounterDisplayProps } from "../../@types/types";
import { CountContext } from "../../Context/counterContext";


function CounterDisplay(props: CounterDisplayProps): JSX.Element {
  const { count } = useContext(CountContext);

  return(
    <div>
      <h1>{`CounterDisplay`.toUpperCase()}</h1>
      <p>{count}</p>
    </div>
  );
};

export default CounterDisplay;