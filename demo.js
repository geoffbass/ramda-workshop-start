function listGraduates (students) {
  const graduates = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const grades = student.grades;
    let total = 0;
    for (let j = 0; j < grades.length; j++) {
      const grade = grades[j];
      total += grade;     
    }
    const average = total / grades.length;
    if (average >= 65) {
      graduates.push(student);
    }
  }
  graduates.sort((a, b) => {
    if (a.last < b.last) {
      return -1;
    } else if (a.last > b.last) {
      return 1; 
    } else {
      return 0;
    }
  });
  const graduateNames = [];
  for (let i = 0; i < graduates.length; i++) {
    const graduate = graduates[i];
    graduateNames.push(graduate.first + ' ' + graduate.last);
  }
  return graduateNames;
}

const students = [
  {
    first: 'John',
    last: 'Hoffman',
    grades: [74, 89, 45, 63, 91]
  },
  {
    first: 'Hattie',
    last: 'Smith',
    grades: [84, 92, 60, 74, 97]
  },
  {
    first: 'Jesse',
    last: 'Roby',
    grades: [40, 62, 85, 33, 56]
  },
	{
    first: 'Walter',
    last: 'Beamer',
    grades: [68, 33, 75, 50, 63]
	},
  {
    first: 'Betty',
    last: 'Torres',
    grades: [88, 94, 79, 96, 79]
  },
  {
    first: 'Ronald',
    last: 'Teague',
    grades: [73, 94, 62, 59, 81]
  },
  {
    first: 'David',
    last: 'Fickes',
    grades: [55, 68, 81, 42, 59]
  }
];

console.log(listGraduates(students));
