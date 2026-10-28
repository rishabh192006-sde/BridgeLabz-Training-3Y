
let currentSalary = 30000;
const incrementRate = 10;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    currentSalary *= (1 + incrementRate / 100);
    currentSalary = Math.round(currentSalary);

    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });
}

console.table(salaryReport);
