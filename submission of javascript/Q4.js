
const marks = [90, 88, 86, 85, 91];

let totalMarks = 0;

for (const mark of marks) {
    totalMarks += mark;
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const failed = marks.some(mark => mark < 35);

let result;

if (failed) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
