export default function getListStudentIds(arrOfObject) {
  if (!(arrOfObject instanceof Array)) {
    return [];
  }
  return arrOfObject.map((item) => item.id);
}
