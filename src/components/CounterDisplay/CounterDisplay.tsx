// Libraries
import { useContext } from 'react';

// Types
import { CSSProperties } from 'react';
import { CounterDisplayProps } from '../../@types/types';

// Context
import { CountContext } from '../../Context/counterContext';

/**
 * Display the global count
 */
function CounterDisplay(props: CounterDisplayProps): JSX.Element {
  // Get state
  const { count } = useContext(CountContext);

  // Construct props
  const style: CSSProperties = {
    backgroundColor: 'orange',
    padding: '1em',
    borderRadius: '50%',
    textAlign: 'center',
    boxShadow: `
      inset 4px 4px 25px 10px yellow,
      4px 4px 16px 4px black
    `,
  };


  return(
    <div style={style}>
      <h1>{count}</h1>
    </div>
  );
};

export default CounterDisplay;