// Reinventing the wheel has its place.
const decToHex = decValue => {
  // Make sure the decValue arg is an integer, or at least willing to pretend.
  if (!isNaN(parseInt(decValue))) {
    // JS will simply put a minus sign in front of negative hex values, which is not what we want.
    // Adding _int32's value to a negative integer should effectively hack in a 32-bit two's complement, obviating the binary conversion step.
    const _int32 = 0x100000000; // *Other bit values to be included later.

    // Node/JS will incorporate decimal points into hex values. For example, a 1.5 becomes a 1.8 (8 being half of 16, of course).
    // We don't want that! Not now anyway.
    // So for now we'll allow float args in, but they'll be integers by the time we're done with them.
    decValue = parseInt(decValue);

    const hexValue =
      decValue >= 0 ? decValue.toString(16) : (decValue + _int32).toString(16);
    console.log(`${decValue} = 0x${hexValue}`);
  } else {
    // TODO: deal with range limits, bits/signed/unsigned values, etc.
    console.log('Error: Input must be a number');
  }
};

// test samples
decToHex(); // Error: Input must be a number
decToHex(1224); // 1224 = 0x4c8
decToHex(13.5); // 13 = 0xd
decToHex(255); // 255 = 0xff
decToHex(256); // 256 = 0x100
decToHex(65535); // 65535 = 0xffff
decToHex(-65535); // -65535 = 0xffff0001
decToHex(3); // 3 = 0x3
decToHex(-3); // -3 = 0xfffffffd
