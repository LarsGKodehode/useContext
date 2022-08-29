// Libraries
import React, { useState, useContext, createContext } from "react";
// Types
import { CountContextType } from "../@types/types";

export const CountContext = createContext<CountContextType>({
  count: 0,
  increment: () => {console.log('Decremnting')},
  decrement: () => {console.log('Incrementing')},
});