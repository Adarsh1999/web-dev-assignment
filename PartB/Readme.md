In this code, I have done:

- ‘async’ keyword used in the ‘startTimer()’ and ‘resetTimer()’ functions, which allow us to use ‘await’ inside them.
- ‘await’ used in the ‘resetTimer()’ function to wait for ‘stopTimer()’ to finish before resetting the timer.
- ‘Promise’ returned by setInterval() wrapped in an ‘async’ function, so that we can use ‘await’ inside the interval function.
- ‘clearInterval()’ used inside ‘stopTimer()’ to stop the interval.
