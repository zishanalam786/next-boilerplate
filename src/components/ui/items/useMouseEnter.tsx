import { useContext } from "react";
import { MouseEnterContext } from "@/helpers/3d-card";
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
