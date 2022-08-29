// Types
import { CounterGUIProps } from "../../@types/types";

function CounterGUI(props: CounterGUIProps): JSX.Element {
  return(
    <div>
      <h1>{`CounterGUI`.toUpperCase()}</h1>
    </div>
  );
};

export default CounterGUI;

export type {
  CounterGUIProps,
};