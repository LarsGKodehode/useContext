// Libraries
import React, { createContext } from "react";
// Types
import { CountContextType } from "../@types/types";

/**
 * Context keeping global count state
 */
export const CountContext = createContext<CountContextType>({count: 0, setCount: () => {}});