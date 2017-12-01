// hexColorValue should be a string with a leading '#' followed by 6 hexidecimal characters
module.exports.colorOpposite = hexColorValue => {
  // Separate RGB values and convert to Numbers.
  const R = Number(`0x${hexColorValue[1] + hexColorValue[2].toString(16)}`);
  const G = Number(`0x${hexColorValue[3] + hexColorValue[4].toString(16)}`);
  const B = Number(`0x${hexColorValue[5] + hexColorValue[6].toString(16)}`);

  // Subtract RGB values from the maximum allowable, essentially flipping them.
  // Convert results to hexidecial strings.
  let r = (0xff - R).toString(16);
  let g = (0xff - G).toString(16);
  let b = (0xff - B).toString(16);

  // Prevent browser from omitting zeroes at the end of our hex values.
  if (r.length === 1) { r += '0'; }
  if (g.length === 1) { g += '0'; }
  if (b.length === 1) { b += '0'; }

  return '#' + r + g + b;
};
