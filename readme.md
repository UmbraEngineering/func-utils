func-utils
==========

Utility functions for functional programming in Node.js


Functions
---------


#### f.arg ( n )

Returns the nth argument on each call.

```javascript
var second = f.arg(2);

second('a', 'b', 'c');
// "b"
```


#### f.first ( void )
#### f.identity ( void )

Aliases for `f.arg(1)`, always returns the first argument on each call.


#### f.nth ( n[, offset ])

Returns `true` on each nth call to the function, and false on every other call.

```javascript
var evenOnly = f.nth(2);

evenOnly();  // false
evenOnly();  // true
evenOnly();  // false
evenOnly();  // true

var oddOnly = f.nth(2, 1);

oddOnly(); // true
oddOnly(); // false
oddOnly(); // true
```


#### f.odd ( void )
#### f.even ( void )

Aliases for `f.nth(2)` and `f.nth(2, 1)`.

```javascript
var nums = [1, 2, 3, 4, 5, 6, 7];

nums.filter(f.odd());
// [1, 3, 5, 7]

nums.filter(f.even());
// [2, 4, 6]
```


#### f.iota ([ start[, skip ]])

Returns an increasing value with each call.

```javascript
var iota = f.iota();

iota(); // 1
iota(); // 2
iota(); // 3

iota = f.iota(1, 2);

iota(); // 1
iota(); // 3
iota(); // 5
```


#### f.not ( func )

Returns a new function that calls through to the given function, but returns a negated return value.

```javascript
var alwaysTrue = function() {
	return true;
};

var alwaysFalse = f.not(alwaysTrue);

alwaysTrue(); // true
alwaysFalse(); // false
```


#### f.pick ( prop )

Selects a specific named property from objects.

```javascript
var people = [
	{name: 'bob', gender: 'male', age: 23},
	{name: 'sarah', gender: 'female', age: 19}
];

var names = people.map(f.pick('name'));
// [ "bob", "sarah" ]
```

