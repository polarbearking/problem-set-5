/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  while (true) {
    height = prompt("Enter an integer between 1 and 23.");
    height=Number(height);
    if (height<=23 && height>=1 && Number.isInteger(height)) {
      break;
    }
}
let row = ""
let space = "&nbsp;"
let brick = "#"

  for (let i = 1; i <= height; i++) {

    for (let g = 1; g <= (height - i); g++) {
      row = row + space;
    }
    row = row + brick

    for (let k = 1; k <= i; k++) {
      row = row + brick ;

    }
    row = row + "<br/>";

        document.getElementById("mario-easy-output").innerHTML= "<code>" + row + "</code>"
  }

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  while (true) {
    height = prompt("Enter an integer between 1 and 23.");
    height=Number(height);
    if (height<=23 && height>=1 && Number.isInteger(height)) {
      break;
    }
}
let row = ""
let space = "&nbsp;"
let brick = "#"

  for (let i = 1; i <= height; i++) {

    for (let g = 1; g <= (height - i); g++) {
      row = row + space;
    }
    row = row + brick

    for (let k = 1; k <= i; k++) {
      row = row + brick;

    }
    row = row + space + space;
    row = row + brick
    for (let k = 1; k <= i; k++) {
      row = row + brick;

    }

    row = row + "<br/>";

        document.getElementById("mario-hard-output").innerHTML= "<code>" + row + "</code>"
  }

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
while (true) {
  card = prompt("Enter a credit card number.")
  card=Number(card);
  if (Number.isInteger(card)){
    break;
  }
}

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  windspeed=Number(prompt("Enter a windspeed greater than or equal to 0"))

  if (windspeed>=157 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Category 5 " + "Hurricane."
  }
  if (windspeed>=130 && windspeed<=156 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Category 4 " + "Hurricane."
  }
  if (windspeed>=111 && windspeed<=129 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Category 3 " + "Hurricane."
  }
  if (windspeed>=96 && windspeed<=110 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Category 2 " + "Hurricane."
  }
  if (windspeed>=74 && windspeed<=95 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Category 1 " + "Hurricane."
  }
  if (windspeed>=39 && windspeed<=73 && Number.isInteger(windspeed)) {
    document.getElementById("hurricane-output").innerHTML= "Tropical Storm."
  }
  if (windspeed<=38) {
    document.getElementById("hurricane-output").innerHTML= "The skies " + "are " + "calm..."
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
   let entries=1
   while (entries<=6){
      let scoreInput=Number(prompt("Enter a score between 1.00 and 10.00"))
      if (scoreInput>=1 && scoreInput<=10 && Number.isInteger(scoreInput)){
        scores.push(scoreInput)
      entries++
      }
   }
scores.sort(function(a,b){return a-b;})
let max=scores[5]
let min=scores[0]
let newScores=[]

let i=1
while (i<=6){
  newScores.push(scores[i])
  i++
}
let averageScore=((newScores[0]+newScores[1]+newScores[2]+newScores[3])/4).toFixed(2);
document.getElementById("gymnastics-output").innerHTML= "Discarded: " + min + ", " + max + "<br/>Score: " + averageScore

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
   while(true) {
     let testinput=Number(prompt("Enter test scores and then enter -1 when done."))
     if (testinput>=0 && testinput<=100 && Number.isInteger(testinput)){
       testTotal = testinput + testTotal
       tests ++
     } else if (testinput==-1) {
       break;
     }
   }

   while(true) {
     let quizinput=Number(prompt("Enter quiz scores and then enter -1 when done."))
     if (quizinput>=0 && quizinput<=100 && Number.isInteger(quizinput)){
       quizTotal = quizinput + quizTotal
       quizzes ++
     } else if (quizinput==-1) {
       break;
     }
   }

   while(true) {
     let homeworkinput=Number(prompt("Enter homework scores and then enter -1 when done."))
     if (homeworkinput>=0 && homeworkinput<=100 && Number.isInteger(homeworkinput)){
       homeworkTotal = homeworkinput + homeworkTotal
       homeworks ++
     } else if (homeworkinput==-1) {
       break;
     }
   }

let tAverage=(testTotal/tests).toFixed(2)
let qAverage=(quizTotal/quizzes).toFixed(2)
let hAverage=(homeworkTotal/homeworks).toFixed(2)
let finalGrade=((tAverage*.6)+(qAverage*.3)+(hAverage*.1)).toFixed(2)

document.getElementById("report-card-output").innerHTML= "Tests: " + tAverage + "<br/>Quizzes: " + qAverage + "<br/>Homework: " + hAverage + "<br/>Grade: " + finalGrade

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
