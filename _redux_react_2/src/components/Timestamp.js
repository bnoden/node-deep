import React from 'react';
const Timestamp = ({ data }) => {
  const date = new Date(data);
  return (
    <span>
      {date.toLocaleDateString()} {shortTime(date)}
    </span>
  );
};

const shortTime = (d, hr, min, sec, md) => {
  hr = !(d.getHours() % 12) ? 12 : d.getHours() % 12;
  min = d.getMinutes();
  // sec = d.getSeconds();
  md = d.getHours() % 24 <= 11 ? 'AM' : 'PM';
  const hrStr = hr <= 9 ? `0${hr}` : hr;
  const minStr = min <= 9 ? `0${min}` : min;
  // const secStr = sec <= 9 ? `0${sec}` : sec;

  return `${hrStr}:${minStr}${md}`;
};

export default Timestamp;
