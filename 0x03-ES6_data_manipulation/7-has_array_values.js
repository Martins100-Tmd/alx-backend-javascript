export default function hasValuesFromArray(set, val) {
  return val.every((item) => Array.from(set).includes(item));
}
