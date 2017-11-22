// Reinventing the wheel has its place.
const decToHex = int => {
  // Make sure the int arg is an integer, or at least willing to pretend.
  if (!isNaN(parseInt(int))) {
    // Adding _uint32's value to negative integer should effectively hack a 32-bit two's complement, skipping binary conversion step.
    const _uint32 = 0x100000000; // *Other bit values to be included later.
    // For now we'll make everything an integer for simplicity's sake
    int = parseInt(int);
    const hexValue = int >= 0 ? int.toString(16) : (int + _uint32).toString(16);
    console.log(`${int} = 0x${hexValue}`);
  } else {
    // TODO: deal with range limits, bits/signed/unsigned values, etc.
    console.log('Error: Input must be a number');
  }
};

// test samples
decToHex();
decToHex(1224);
decToHex(13.5);
decToHex(255);
decToHex(256);
decToHex(65535);
decToHex(-65535);
decToHex(3);
decToHex(-3);
