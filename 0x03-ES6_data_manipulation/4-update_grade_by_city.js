export default function updateStudentGradeByCity(student = [], city, grade = []) {
  if (typeof student !== 'object') return [];
  const mapped = student
    .map((item) => {
      const newItem = item;
      const exist = grade.some((item) => item.studentId === newItem.id);
      if (exist) {
        const index = grade.findIndex((item) => item.studentId === newItem.id);
        newItem.grade = grade[index].grade;
      } else {
        newItem.grade = 'N/A';
      }
      return newItem;
    })
    .filter((item) => item.location === city);
  return mapped;
}

