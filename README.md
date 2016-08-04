## A React calculator

Built to play around with React, and also the `create-react-app` module, which can be found at
https://github.com/facebookincubator/create-react-app/blob/master/template/README.md

Feedback appreciated! My Github username is ethanjfriedman.

### What this project is

A simple pocket calculator, built in React.

### TO DO
* Continue refactoring
* ~~Add in floating point arithmetic~~
* Add in ability to operate in non-base 10 arithmetic
* Add in memory (M+, MR, MC keys)
* ~~Add in clear button~~
* Add in 'repeat previous operation' ability by repeatedly pressing equal sign (so that `3 + 5 = =` will result in 13)
* Add in better parsing to avoid various errors if impossible key combos are pressed
* Add in button that reveals additional operators such as:
  - ~~trig operations (sin, cos, tan, etc.)~~
  - scientific notation
  - ~~log and ln~~
  - ~~square root~~
  - ~~x^2~~
  - others?
* Add in button to copy result to clipboard

UPDATE 8/3/2016
* also added in keys for π, *e*, xʸ ...
* added in static Express server! To serve:
  - run `npm run build` to generate the build for deployment (in `./build`)
  - run `npm start` to serve it up!
* changed the prior `start` script to `start-dev`: to start the app in development mode (with hot reloading, etc.), run `npm run start-dev`.

UPDATE 8/4/2016
* We have a decimal point! For extra precision, all calculations are done as integers until the end (the display however shows the decimal point).
* Fixed deployment error (`create-react-app` had automatically added in the `build/` directory to the .gitignore -- grrr).
* Minor styling 
* Minor refactoring
