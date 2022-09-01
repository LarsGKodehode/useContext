// Types
import { Page3Props } from "../../@types/types";

// Components
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";

function Page3(props: Page3Props): JSX.Element {
  return(
    <main>
      <h1>{`Page3`.toUpperCase()}</h1>
      <CounterDisplay />
    </main>
  );
};

export default Page3;