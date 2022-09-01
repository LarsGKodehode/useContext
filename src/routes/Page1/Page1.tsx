// Types
import { CSSProperties } from "react";
import { Page1Props } from "../../@types/types";

// Components
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";

function Page1(props: Page1Props): JSX.Element {
  const style: CSSProperties = {
  };

  return(
    <main>
      <h1>{`Page1`.toUpperCase()}</h1>
      <div
        style={style}
      >
        <CounterDisplay />
      </div>
    </main>
  );
};

export default Page1;