import gridStyles from "./grid.module.scss";

export type GridType = {
  className?: string;
  children: React.ReactNode;
};

const Grid = ({ className, children }: GridType) => {
  return <div className={`grid ${gridStyles.grid} ${className}`}>{children}</div>;
};

export default Grid;
