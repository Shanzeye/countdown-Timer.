#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
function* CountdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerIterator = CountdownTimer(10);
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const CountdownTimer = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = differenceInSeconds(CountdownTimer, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000);
    }
    else {
        console.log("Countdown Complete!");
    }
}
displayCountdown();
