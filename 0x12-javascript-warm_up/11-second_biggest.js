#!/usr/bin/node
// searches the second biggest integer in the list of arguments.

let argv = process.argv;

if (argv.length < 4) { console.log(0); } else {
  // Strip extraneous args
  argv = argv.slice(2);
  // Convert elems to ints
  let nums = argv.map(x => parseInt(x));
  nums = nums.sort(function (a, b) { return a - b; });
  // Find max int in list
  console.log(nums[nums.length - 2]);
}
