
function destroyer(arr) {
  // Remove all the values
  args = Array.prototype .slice.call(arguments,1);
  function remove(x) { return args.indexOf(x) === -1; }
  return arguments[0].filter(remove)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
