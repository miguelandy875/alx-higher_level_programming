#!/usr/bin/node
// prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
let parsed = parseInt(process.argv[2]);

if (parsed) {
  parsed = 'My number: ' + parsed;
  console.log(parsed);
} else {
  console.log('Not a number');
}