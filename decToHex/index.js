// TODO: deal with range limits, bits/signed/unsigned values, etc.

module.exports.decToHex = (decValue, hexValue) => {
  // Make sure the decValue arg is an integer, or at least willing to pretend.
  if (!isNaN(parseInt(decValue))) {
    // JS will simply put a minus sign in front of negative hex values, which is not what we want.
    // Adding _int32's value to a negative integer should effectively obviate binary conversion for a 32-bit two's complement.
    const _int32 = 0x100000000; // *Other bit values to be included later.

    // Node/JS will incorporate decimal points into hex values. For example, a 1.5 becomes a 1.8 (8 being half of 16, of course).
    // We don't want that! Not now anyway.
    // So for now we'll allow float args in, but they'll be integers by the time we're done with them.
    decValue = parseInt(decValue);

    hexValue =
      decValue >= 0 ? decValue.toString(16) : (decValue + _int32).toString(16);
  }

  return hexValue ? hexValue : 'Error: Input must be a number';
};
