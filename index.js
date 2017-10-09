function produceDrivingRange(range) {
  return function(start, end) {
    distance = Math.abs(parseInt(start) - parseInt(end));
    return distance > range
      ? `${distance - range} blocks out of range`
      : `within range by ${range - distance}`;
  };
}

function produceTipCalculator(percent) {
  return function(price) {
    return percent * price;
  };
}
