let gpa = 0;
let amountOfGrades = 0;
let grades = 0;


function a() { grades += 4; amountOfGrades += 1; }
function a_minus() { grades += 3.66; amountOfGrades += 1; }
function b_plus() { grades += 3.33; amountOfGrades += 1; }
function b() { grades += 3; amountOfGrades += 1; }
function b_minus() { grades += 2.66; amountOfGrades += 1; }
function c_plus() { grades += 2.33; amountOfGrades += 1; }
function c() { grades += 2; amountOfGrades += 1; }
function c_minus() { grades += 1.66; amountOfGrades += 1; }
function d_plus() { grades += 1.33; amountOfGrades += 1; }
function d() { grades += 1; amountOfGrades += 1; }
function d_minus() { grades += 0.66; amountOfGrades += 1; }
function f() { grades += 0; amountOfGrades += 1; }

function calculateGradePointAverage() {
    gpa = grades / amountOfGrades;
}