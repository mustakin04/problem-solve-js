/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let number = 20;
if (number >= 90 && number <= 100) {
    console.log("she get golden A+");
}
else if (number >= 80 && number <= 89) {
    console.log("she get only A+");
}
else if (number >= 70 && number <= 79) {
    console.log("she get A-");
}
else if (number >= 60 && number <= 69) {
    console.log("she get B+");
}
else if (number >= 50 && number <= 59) {
    console.log("she get B-");
}
else if (number >= 40 && number <= 49) {
    console.log("she get c");
}
else if (number >= 33 && number <= 40) {
    console.log("she get D");
}
else {
    console.log("she should get married '.' ");
}
