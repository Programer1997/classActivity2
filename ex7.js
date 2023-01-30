/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
Write a switch statement to set the average salary of a person based on their type of completed education.
Afterwards, print the following to the console.
In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks). For help, refer to the findings above.
In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US"). 
*/






function gradeAverage(schoolGrade){

    let grade = " ";
    let average = 0;

switch (schoolGrade) {


case 1 :  
grade = "no high School diploma";
average = 25636;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

 case 2 :  
 grade = "high School diploma";
 average = 35256;
 console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
  break;

  case 3 :  
grade = "Associate's degree";
average = 41496;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

 case 4 :  
grade = "Bachelor's degree";
average = 59124;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

 case 5 :  
grade = "Master's degree";
average = 69732;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

 case 6 :  
grade = "Professional degree";
average = 89960;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

 case 7 :  
grade = "Doctoral degree";
average = 84396;
console.log("In 2015, a person with a " + grade + " earned an average of " + average.toLocaleString("en-US") + "/year.");
 break;

default : 
console.log("any grade of study");
 break;
}
}


console.log(gradeAverage(1));
console.log(gradeAverage(2));
console.log(gradeAverage(3));
console.log(gradeAverage(4));
console.log(gradeAverage(5));
console.log(gradeAverage(6));
console.log(gradeAverage(7));
