/**
 * Type file for custom css variables to apease the TypeScript gods
 */
import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Probably too wide but allows easy definition of CSS custom properties
    [index: string]: any;
  };
};