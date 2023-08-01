export default function createInt8TypedArray(length, pos, val) {
  const u8arr = new ArrayBuffer(length);
  if (pos > length - 1) {
    throw new Error('Position outside range');
  }
  const data = new DataView(u8arr);
  data.setInt8(pos, val);
  return data;
}
