import { fontFamilies } from "../../../../lib/fontFamiles";
import { replaceSpacesToDash } from "../../../../utils/replaceSpacesToDash";
import Styles from "./font-family.module.scss";
import Card from "../../../ui/card/Card";
import Grid from "../../../common/grid/Grid";

const FontFamilySection = () => {
  const renderFontFamilies = () => {
    if (fontFamilies) {
      return fontFamilies.map((fontFamily) => (
        <Card
          style={{
            fontFamily: replaceSpacesToDash(fontFamily.name.toLowerCase()),
          }}
          details={fontFamily.name}
        />
      ));
    }
  };

  return <Grid className={`${Styles.grid}`}>{renderFontFamilies()}</Grid>;
};

export default FontFamilySection;
