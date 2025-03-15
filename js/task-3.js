function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74  (50 + 2*8 + 2*4 = 50 + 16 + 8 = 74)
console.log(getElementWidth("60px", "12px", "8.5px")); // 101 (60 + 2*12 + 2*8.5 = 60 + 24 + 17 = 101)
console.log(getElementWidth("200px", "0px", "0px")); // 200
