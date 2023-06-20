function timeSpanToString(startDate, endDate) {
  const res = new Date(endDate - startDate);
  return `${res.toUTCString().slice(17).slice(0, -4)}:${res.getMilliseconds() === 0 ? '000' : res.getMilliseconds()}`;
  // throw new Error('Not implemented');
}
console.log(timeSpanToString(new Date(2000, 1, 1, 10, 0, 0), new Date(2000, 1, 1, 11, 0, 0)))
