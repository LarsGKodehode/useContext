/**
 * Template type for props
 */
export interface NavbarProps {
  links: Array<NavbarLinkType>,
};

/**
 * Template type for props
 */
export interface NavbarLinkType {
  to: string,
  title: string,
};

/**
 * Template type for props
 */
export interface Missing404Props {};

/**
 * Template type for props
 */
export interface Page1Props {};

/**
 * Template type for props
 */
export interface Page2Props {};

/**
 * Template type for props
 */
export interface Page3Props {};


/**
 * Template type for props
 */
export interface CounterDisplayProps {};

/**
 * Template type for props
 */
export interface CounterGUIProps {};

/**
 * Context type
 */
export type CountContextType = {
  count: number,
  increment?: CallableFunction,
  decrement?: CallableFunction,
};