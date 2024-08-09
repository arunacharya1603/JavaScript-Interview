const students = [
    { name: 'Emma', grades: [90, 85, 92] },
    { name: 'Liam', grades: [88, 79, 95] },
    { name: 'Olivia', grades: [91, 83, 89] }
];


const avgGrade = students.map(student => {
    const avg = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
    return { name: student.name, avgGrade: avg };
}
);

console.log(avgGrade);
