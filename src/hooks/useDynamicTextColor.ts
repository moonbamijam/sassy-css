// by Sinan Aksay. March 23, 2020. https://wunnle.com/dynamic-text-color-based-on-background

const useDynamicTextColor = () => {
  const getRGB = (c: any) => {
    return parseInt(c, 16) || c;
  };

  const getsRGB = (c: any) => {
    return getRGB(c) / 255 <= 0.03928
      ? getRGB(c) / 255 / 12.92
      : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
  };

  const getLuminance = (hexColor: string) => {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    );
  };

  const getContrast = (f: any, b: any) => {
    const L1 = getLuminance(f);
    const L2 = getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  };

  const getTextColor = (bgColor: string) => {
    const whiteContrast = getContrast(bgColor, "#FFFFFF");
    const blackContrast = getContrast(bgColor, "#000000");

    return whiteContrast > blackContrast ? "#FFFFFF" : "#000000";
  };

  return {
    getTextColor,
  };
};

export default useDynamicTextColor;
