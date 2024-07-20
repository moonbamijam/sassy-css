import Grid from "../../common/grid/Grid";
import Card from "../../ui/card/Card";
import styles from "./padding-section.module.scss";

const PaddingSection = () => {
  return (
    <Grid className={`${styles.grid}`}>
      <Card content={<PaddingBox spacingSize="2px" />} details="extra small" />
      <Card content={<PaddingBox spacingSize="4px" />} details="small" />
      <Card content={<PaddingBox spacingSize="6px" />} details="medium" />
      <Card content={<PaddingBox spacingSize="8px" />} details="large" />
      <Card content={<PaddingBox spacingSize="8px" />} details="extra large" />
      <Card content={<PaddingBox spacingSize="16px" />} details="2XL" />
    </Grid>
  );
};

type PaddingBoxProps = {
  spacingSize: string;
};

const PaddingBox = ({ spacingSize }: PaddingBoxProps) => {
  return (
    <div className={`${styles.padding_content}`} style={{ padding: spacingSize }}>
      {spacingSize}
    </div>
  );
};

export default PaddingSection;
