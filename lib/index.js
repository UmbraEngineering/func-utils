
var f = module.exports = exports;

// --------------------------------------------------------

// 
// Used for selecting a specific named property from objects
// 
// Example:
// 
//   var people = [{name: 'bob'}, {name: 'sarah'}];
//   var names = people.map(f.prop('name'));
// 
f.prop = function(prop) {
	return function(obj) {
		return obj[prop];
	};
};

// --------------------------------------------------------






