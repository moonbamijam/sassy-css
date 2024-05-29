import { ReactNode } from "react";
import gridStyles from "./grid.module.scss";

export type GridType = {
  id: string;
  className?: string;
  children: ReactNode;
};

const Grid = ({ id, className, children }: GridType) => {
  return (
    <div id={id} className={`${gridStyles.grid} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
