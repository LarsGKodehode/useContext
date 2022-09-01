// Types
import { Page2Props } from "../../@types/types";

// Components
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";


/**
 * Second page for displaying the counter here
 */
function Page2(props: Page2Props): JSX.Element {
  return(
    <main>
      <h1>{`Page2`.toUpperCase()}</h1>
        <CounterDisplay />
    </main>
  );
};

export default Page2;