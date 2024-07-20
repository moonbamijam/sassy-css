import styles from "./gap-section.module.scss";
import Grid from "../../common/grid/Grid";
import Card from "../../ui/card/Card";

type Props = {};

const GapSection = (props: Props) => {
  return (
    <Grid className={`${styles.grid}`}>
      <Card content={<MarginBox spacingSize="2" />} details="extra small" />
      <Card content={<MarginBox spacingSize="4" />} details="small" />
      <Card content={<MarginBox spacingSize="6" />} details="medium" />
      <Card content={<MarginBox spacingSize="8" />} details="large" />
      <Card content={<MarginBox spacingSize="8" />} details="extra large" />
      <Card content={<MarginBox spacingSize="16" />} details="2XL" />
    </Grid>
  );
};

type MarginBoxProps = {
  spacingSize: string;
};

const MarginBox = ({ spacingSize }: MarginBoxProps) => {
  return (
    <div className={`${styles.gap_wrapper}`}>
      <div>{spacingSize}</div>
      <div
        className={`${styles.gap_content}`}
        style={{ width: spacingSize + "px " }}
      ></div>
      <p style={{ textTransform: "none" }}>px</p>
    </div>
  );
};

export default GapSection;
