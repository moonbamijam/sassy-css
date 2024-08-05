import Styles from "./padding-section.module.scss";
import Grid from "../../common/grid/Grid";
import Card from "../../ui/card/Card";

const PaddingSection = () => {
  return (
    <Grid className={`${Styles.grid}`}>
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
    <div className={`${Styles.padding_content}`} style={{ padding: spacingSize }}>
      {spacingSize}
    </div>
  );
};

export default PaddingSection;
