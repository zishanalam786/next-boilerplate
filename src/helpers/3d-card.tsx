"use client";
import { createContext } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);
export { MouseEnterContext };
//EOF