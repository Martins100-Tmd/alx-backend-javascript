export default function getStudentsByLocation(student, location) {
  if (typeof student !== 'object') {
    return [];
  }
  return student.filter((item) => item.location === location);
}
