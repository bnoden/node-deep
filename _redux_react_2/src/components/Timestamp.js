import React from 'react';
const Timestamp = ({ data }) => {
  
  // TODO: delete this
  data-=0x9E1254464E;
  
  const d = new Date(data);
  
  return (
    <span>
      {d.toUTCString()}
    </span>
  );
};

export default Timestamp;
