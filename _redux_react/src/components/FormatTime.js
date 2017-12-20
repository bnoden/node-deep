const FormatTime = duration => {
  const seconds = duration >= 60 ? duration % 60 : duration;
  const minutes = duration >= 60 ? Math.floor(duration / 60) % 60 : 0;
  const hours = duration >= 3600 ? Math.floor(duration / 3600) : 0;

  const hourStr = duration >= 3600 && `${hours}`;
  const minuteStr =
    minutes <= 9 && duration >= 3600 ? `0${minutes}` : `${minutes}`;
  const secondStr = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return duration >= 3600
    ? `${hourStr}:${minuteStr}:${secondStr}`
    : `${minuteStr}:${secondStr}`;
};

export default FormatTime;
