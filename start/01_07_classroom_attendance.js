// Write your code here

function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;

  if (hasTeachingAssistant) {
    const [teacher, ta, ...students] = classList;
    return students;
  } else {
    const [teacher, ...students] = classList;
    return students;
  }
}

const classroom1 = {
  hasTeachingAssistant: true,
  classList: ['a', 'b', 'c','d','e']
}

const classroom2 = {
  hasTeachingAssistant: false,
  classList: ['a', 'b', 'c','d','e']
}

console.log(getStudents(classroom1));
console.log(getStudents(classroom2));