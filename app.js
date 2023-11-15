//THIS IS THE FIRST CODE FOR THE TIMERS EXERCISE. I WROTE IT WITHOUT ASSISTANCE OTHER THAN THE CHAT GPT &
//SPRINGBOARD STEPS TO WRITE THE CODE. JUST MY OWN INTERPRETATION OF THE AQCUIRED KNOWLEDGE ON THE SUBJECT MATTER.

// function countdown(4) {
//     if (countdown >= 4) {
//         console.log(--1);
//     }
//     else if (countdown = 0) {
//         console.log(clearInterval);
//     } else {
//         console.log("DONE!");
//     }
// }
// setInterval(countdown, 3000, 4);

//THIS IS THE SECOND CODE FOR THE TIMERS EXERCISE. I HAD CHAT GPT EDIT MY MISTAKES IN THE FIRST CODE
// let count = 4; (Correction: Changed the parameter 4 in countdown(4) to a variable count which is used to keep
//                 track of the countdown value.)

// function countdown() {
//     if (count >= 4) { ERROR(Incorrect Check: In your if condition, you're checking if count is greater than 4,
//                                 which will never be true. You want to check if count is greater than 0 to continue
//                                 counting down.)

//         console.log(--count); (Correction: Changed --1 to --count to decrement the count variable and log the
//                                correct countdown value.)

//     } else if (count === 0) { (Correction: Changed else if(countdown = 0) to else if (count === 0) to check if
//                                count is equal to 0.)

//         clearInterval(intervalId); ERROR(Clearing Interval: You're using clearInterval before checking if the
//                                           countdown has reached 0, which will stop the interval prematurely. You
//                                           should move the clearInterval call inside the condition where count is
//                                           0.)

//         console.log("Countdown complete!"); (Correction: Used clearInterval(intervalId) to clear the interval,
//                                              and added the message "Countdown complete!".)

//     } else {
//         console.log("DONE!");
//     }
// }
// let intervalId = setInterval(countdown, 1000); (Correction: Removed the third argument from setInterval() since 
//                                                 I only need the callback function to execute every specified 
//                                                 interval.)

//THIS IS THE THIRD CODE FOR THE TIMERS EXERCISE. THE BASE OF IT WAS CREATED BY ME, CHAT GPT EDITED SOME ERRORS,
//AND I CLEANED UP SOME OF THE TEXT TO CUSTOMIZE IT TO MY LIKING.
let count = 4;

function countDown() {
    if (count >= 0) {
        console.log(count);
        count--; // Always place the Decrement operator after your text to log it properly.
    } else if (count === 0) {
        clearInterval(allClear);
        console.log("GAMEWINNER!");
    } else {
        console.log("DONE!");
    }
}
let allClear = setInterval(countDown, 1000);


//THIS IS THE FIRST CODE FOR THE TIMERS EXERCISE.I WROTE IT WITHOUT ASSISTANCE OTHER THAN THE CHAT GPT &
//SPRINGBOARD STEPS TO WRITE THE CODE. JUST MY OWN INTERPRETATION OF THE AQCUIRED KNOWLEDGE ON THE SUBJECT MATTER.
// let rg = 0.75;

// function randomGame() {
//     if (rg >= 0) {
//         console.log(rg);
//         rg++;
//     } else if (rg === 0.75) {
//         let rg = Math.floor((Math.random() * 0) + 0.75);
//         clearInterval(counter)
//         console.log("FANETO!");//I used this formula to generate a number between 3-6
//     } else {
//         console.log(`It took ${counter} try/tries.`);
//     }
// }
//THE ERROR IN THIS CODE IS I WROTE IT AS IF I WERE WRITING THE COUNTDOWN. I HAD THE RIGHT IDEA IN TRYING TO DECLARE
//A VARIABLE EARLY ON, BUT I NEEDED TO INTERTWINE A FUNCTION AND MATH.RANDOM INTO THE CODE WITH UNDECLARED VARIABLES
//INSTEAD OF DOING WHAT I DID. ALSO I DIDN'T NEED AN ELSE STATEMENT, AND ALSO DIDN'T INCLUDE THE SETINTERVAL 
//CORRECTLY. I HAD THE RIGHT IDEA WITH THE WAY I WROTE THE CLEAR INTERVAL. MUCH TO LEARN.

//THIS IS THE SECOND CODE FOR TIMERS EXERCISE. I USED CHAT GPT & SPRINGBOARDS SOLUTION CODE TO HELP ME WITH WRITING
//IT OUT CORRECTLY. STILL ALOT TO LEARN, DEFINITELY CAN USE THIS AS A GROUND BASIS FOR RANDOMGAME FUNCTIONS IN THE
//FUTURE.
let turns = 0;
let counter;

function randomGame() {
    counter = setInterval(function () {
        let randomNum = Math.random();
        turns++;

        if (randomNum > 0.75) {
            clearInterval(counter);
            console.log(`It took ${turns} try/tries.`);

        }
    }, 1000);
}

// function randomGame() {

//     let num;
//     let times = 0;
//     let timer = setInterval(function () {
//         num = Math.random();
//         times++
//         if (num > .75) {
//             clearInterval(timer);
//             console.log(`It took ${times} try/tries.`);
//         }
//     }, 1000)
// } 