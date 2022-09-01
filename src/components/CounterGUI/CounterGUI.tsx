// Libraries
import { Component, useContext } from 'react';

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
  const centerContent: CSSProperties = {
    alignContent: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#00000000',
    border: '0px',
    borderRadius: '50%',
    ...centerContent,
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

  /**
   * Colors for custom gradient
   */
  const svgCustomColors: CSSProperties = {
    "--gradient-vertical-top": '#8e876f',
    "--gradient-vertical-bottom": '#0b060e',
    "--gradient-radial-center": '#99999900',
    "--gradient-radial-edge": '#0b060e55',
  };

  const incrementProps = {
    ...svgProps,
  };
  
  const decrementProps = {
    ...svgProps,
  };

  // These SVG implementation should be extracted into their own components rather then have them inside here

  /**
   * SVG for incremting something
   */
  const SVGIncrement = (): JSX.Element => {
    return(
      <svg {...incrementProps} style={svgCustomColors}>
        <linearGradient id="gradient-vertical" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gradient-vertical-top)" />
          <stop offset="100%" stopColor="var(--gradient-vertical-bottom)" />
        </linearGradient>
        <radialGradient id="gradient-radial">
          <stop offset="50%" stopColor="var(--gradient-radial-center)" />
          <stop offset="95%" stopColor="var(--gradient-radial-edge)" />
        </radialGradient>
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="url(#gradient-vertical)"
        />
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="url(#gradient-radial)"
          fillOpacity=".5"
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
      <svg {...decrementProps} style={svgCustomColors}>
        <linearGradient id="gradient-vertical" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gradient-vertical-top)" />
          <stop offset="100%" stopColor="var(--gradient-vertical-bottom)" />
        </linearGradient>
        <radialGradient id="gradient-radial">
          <stop offset="50%" stopColor="var(--gradient-radial-center)" />
          <stop offset="95%" stopColor="var(--gradient-radial-edge)" />
        </radialGradient>
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="url(#gradient-vertical)"
        />
        <circle
          cx="50"
          cy="50"
          r="50"
  
          fill="url(#gradient-radial)"
          fillOpacity=".5"
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