const nextElementInList = <T>(list: T[], value: T): T => {
  const currentActionIndex = list.indexOf(value);
  const nextListIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nextListIndex];
  return nextValue;
};

export default nextElementInList;
