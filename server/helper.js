// exports is an object (notice the dot notation) and is what can be taken out of a file.
// Anything that isn't passed to export is ignored (this can be a way to make private methods)
exports.shout = (word) => word.toUpperCase(); // this makes all the chars on a string uppercase
exports.greeting = "Hello, web dev!"; // I can assign literals, objects, functions, whatever I want