// Libraries
import { useContext } from 'react';

// Types
import { CSSProperties } from 'react';
import { CounterDisplayProps } from '../../@types/types';

// Context
import { CountContext } from '../../Context/counterContext';


function CounterDisplay(props: CounterDisplayProps): JSX.Element {
  // Get state
  const { count } = useContext(CountContext);

  // Construct props
  const style: CSSProperties = {
    border: '1px solid yellow',
    borderRadius: '10px',
    textAlign: 'center',
  };


  return(
    <div style={style}>
      <h1>{count}</h1>
    </div>
  );
};

export default CounterDisplay;