// Libraries
import React, { createContext } from "react";
// Types
import { CountContextType } from "../@types/types";

export const CountContext = createContext<CountContextType>({count: 0, setCount: () => {}});