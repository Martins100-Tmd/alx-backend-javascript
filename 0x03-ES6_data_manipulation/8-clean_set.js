export default function cleanSet(set, str) {
  const mapped = Array.from(set).map((item, index) => {
    let newItem = '';
    if (item.startsWith(str) && index === 0) {
      newItem = item.replace(str, '');
    }
    if (item.startsWith(str) && index > 0) {
      newItem = `-${item.replace(str, '')}`;
    }
    return newItem;
  });
  return mapped.join('');
}
