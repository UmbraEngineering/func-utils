func-utils
==========

Utility functions for functional programming in Node.js


Functions
---------


#### f.pick

Used for selecting a specific named property from objects.

```javascript
var f = require('func-utils');

var people = [
	{name: 'bob', gender: 'male', age: 23},
	{name: 'sarah', gender: 'female', age: 19}
];

var names = people.map(f.pick('name'));
// [ "bob", "sarah" ]
```

