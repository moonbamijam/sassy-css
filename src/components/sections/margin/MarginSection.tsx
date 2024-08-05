import Styles from "./margin-section.module.scss";
import Grid from "../../common/grid/Grid";
import Card from "../../ui/card/Card";

const MarginSection = () => {
  return (
    <Grid className={`${Styles.grid}`}>
      <Card content={<MarginBox spacingSize="2px" />} details="extra small" />
      <Card content={<MarginBox spacingSize="4px" />} details="small" />
      <Card content={<MarginBox spacingSize="6px" />} details="medium" />
      <Card content={<MarginBox spacingSize="8px" />} details="large" />
      <Card content={<MarginBox spacingSize="8px" />} details="extra large" />
      <Card content={<MarginBox spacingSize="16px" />} details="2XL" />
    </Grid>
  );
};

type MarginBoxProps = {
  spacingSize: string;
};

const MarginBox = ({ spacingSize }: MarginBoxProps) => {
  return (
    <div className={`${Styles.margin_wrapper}`}>
      <div
        className={`${Styles.margin_content}`}
        style={{ margin: spacingSize }}
      >
        {spacingSize}
      </div>
    </div>
  );
};

export default MarginSection;
