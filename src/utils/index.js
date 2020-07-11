export const calculateTimeLeft = age => {
  const lifeExpectative = 100;
  const yearsLeft = isNaN(age) ? 0 : lifeExpectative - age;
  const _daysLeft = yearsLeft * 365;
  const _weeksLeft = _daysLeft / 7;
  return { daysLeft: _daysLeft, weeksLeft: _weeksLeft };
};

export const formatFloat = float => {
  const formatted = float.toFixed(2);
  return formatted.toString().replace('.00', '');
};
