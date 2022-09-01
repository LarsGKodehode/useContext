// Libraries
import { useContext } from 'react';

// Types
import { BaseSyntheticEvent, CSSProperties } from 'react';
import { CounterGUIProps } from '../../@types/types';

// Context
import { CountContext } from '../../Context/counterContext';

/**
 * GUI with buttons to increment and decrement context
 */
function CounterGUI(props: CounterGUIProps): JSX.Element {
  // Grab refrence to counterContext
  const {count, setCount} = useContext(CountContext);

  // Handlers
  function handleIncrement(event: BaseSyntheticEvent): void {
    event.preventDefault();
    setCount(previousValue => previousValue + 1);
  };

  function handleDecrement(event: BaseSyntheticEvent): void {
    event.preventDefault();
    setCount(previousValue => previousValue - 1);
  };

  // Construct props
  const buttonStyle: CSSProperties = {
    backgroundColor: '#00000000',
    border: '0px',
    borderRadius: '50%',
  };

  const layout: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
  };

  const guiStyle: CSSProperties = {
    filter: 'drop-shadow(4px 4px 8px 8px black',
    ...layout,
  };

  const svgProps = {
    width: '100',
    height: '100',
  };
  const incrementProps = {
    ...svgProps,
  };
  
  const decrementProps = {
    ...svgProps,
  };

  /**
   * SVG for incremting something
   */
  const SVGIncrement = (): JSX.Element => {
    return(
      <svg {...incrementProps}>
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="gray"
        />
        <path
         d='
         M 25 70
         Q 25 45 50 20
         Q 75 45 75 70
         C 50 45 50 45 25 70
         Z
         '
         stroke='white'
         strokeWidth='1'
         fill='white'
        />
      </svg>
    );
  };
  
  /**
   * SVG for decremting something
   */
  const SVGDecrement = (): JSX.Element => {
    return(
      <svg {...decrementProps}>
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="gray"
        />
        <path
         d='
         M 25 30
         Q 25 55 50 80
         Q 75 55 75 30
         C 50 55 50 55 25 30
         Z
         '
         stroke='white'
         strokeWidth='1'
         fill='white'
        />
      </svg>
    );
  };

  return(
    <div
      style={guiStyle}
    >
      <button style={buttonStyle} onClick={(event) => handleIncrement(event)}>
        <SVGIncrement />
      </button>
      <button style={buttonStyle} onClick={(event) => handleDecrement(event)}>
        <SVGDecrement />
      </button>
    </div>
  );
};

export default CounterGUI;