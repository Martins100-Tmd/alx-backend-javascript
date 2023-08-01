export default function getListStudentIds(arrOfObject) {
  if (typeof arrOfObject !== 'object') {
    return [];
  }
  return arrOfObject.map((item) => item.id);
}

