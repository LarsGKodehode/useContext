// Types
import { Missing404Props } from "../../@types/types";


/**
 * 404 page for none existent paths
 */
function Missing404(props: Missing404Props): JSX.Element {
  return(
    <main>
      <h1>{`Missing404`.toUpperCase()}</h1>
    </main>
  );
};

export default Missing404;