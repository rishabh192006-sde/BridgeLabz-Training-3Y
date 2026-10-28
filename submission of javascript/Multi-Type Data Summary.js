
const userName = "Madhav";
const age = 23;
const isStudent = true;
const skills = ["JavaScript", "Python", "SQL"];
const user = { city: "Kosi", course: "B.Tech CSE" };
const middleName = null;
let address;

const report = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "skills", Value: JSON.stringify(skills), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "user", Value: JSON.stringify(user), Type: typeof user },
    { Label: "middleName", Value: middleName, Type: typeof middleName },
    { Label: "address", Value: address, Type: typeof address }
];

console.table(report);
