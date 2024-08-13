export const replaceSpacesToDash = (text: string) => {
  let newText = text.replace(/\s/g, "-");

  return newText;
};
