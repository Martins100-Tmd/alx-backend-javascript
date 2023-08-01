export default function getStudentIdsSum(student) {
  if (typeof student !== 'object') return [];
  return student.reduce((prev, curr) => prev + curr.id, 0);
}
