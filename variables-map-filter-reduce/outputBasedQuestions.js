let students = [
  { name: "Piyush", rollNumber: 21, marks: 38 },
  { name: "Jenny", rollNumber: 35, marks: 74 },
  { name: "Gim", rollNumber: 34, marks: 50 },
  { name: "Milka", rollNumber: 56, marks: 86 },
];

// Q1. Return only the names of students in Capital
// const names = students.map((student) => student.name.toUpperCase());
// console.log(names);

// Q2. Return on the details of those who scored more than 60
// const details = students.filter((student) => student.marks > 60);
// console.log(details);

// Q3. MOre than 60 marks and rollNumber greater than 30
// const details = students.filter((student) => student.marks > 60 && student.rollNumber > 30);
// console.log(details);

//Q4. Sum of marks of all the students
// const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(sum);

// chaining multiple methods
//Q5. return only names of students with marks more than 60

// const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(names);

// Q6. Return total marks for students with marks greater than 60, after 20 marks have been added to those who scored less than 60.

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
