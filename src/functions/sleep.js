const convertToMilliseconds = (minutes) => {
  return minutes * 60 * 1000;
};

const getTimeString = (milliseconds) => {
  const seconds = milliseconds / 1000;
  const h = parseInt(seconds / (60 * 60));
  const m = parseInt((seconds % (60 * 60)) / 60);
  const s = parseInt(seconds % 60);
  let stringResult =
    h > 0
      ? (h < 10 ? '0' + h : h) +
        ':' +
        (m < 10 ? '0' + m : m) +
        ':' +
        (s < 10 ? '0' + s : s)
      : (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  return stringResult;
};

export {convertToMilliseconds, getTimeString};
