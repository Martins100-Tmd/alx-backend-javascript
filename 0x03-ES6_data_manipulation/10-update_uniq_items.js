export default function updateUniqueItems(map) {
  const newMap = new Map();
  if (!(map instanceof Map)) throw new Error('Cannot process');
  Array.from(map).forEach((item) => {
    const [k, v] = item;
    if (v === 1) newMap.set(k, 100);
    if (v !== 1) newMap.set(k, v);
  });
  return newMap;
}
