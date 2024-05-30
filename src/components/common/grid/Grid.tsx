import { ReactNode } from "react";
import gridStyles from "./grid.module.scss";

export type GridType = {
  className?: string;
  children: ReactNode;
};

const Grid = ({ className, children }: GridType) => {
  return <div className={`${gridStyles.grid} ${className}`}>{children}</div>;
};

export default Grid;
