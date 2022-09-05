# Arrays

Strings and numbers are our basic building blocks, but we need a way to handle lots of them.
> An array is simply and ordered collection of items

<br>

# JavaScript Array Const
<br>
It is a common practice to declare arrays with the const keyword.

> An array declared with const cannot be reassigned:
```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```
> Elements Can be Reassigned

You can change the elements of a constant array:

<h3>Assigned when Declared
JavaScript 
</h3>
<br>
 const variables must be assigned a value when they are declared:

> Meaning: An array declared with const must be initialized when it is declared.

Using **const** without initializing the array is a syntax error: variables must be assigned a value when they are declared:

> Meaning: An array declared with const must be initialized when it is declared.

Using const without initializing the array is a syntax error

# JavaScript Array Methods

<h2>Converting Arrays to Strings</h2>

<h3>
<br>

**toString()**</h3>

 converts an array to a string of (comma separated) array values.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//Banana,Orange,Apple,Mango
```
**join()**</h3>

It behaves just like toString(), but in addition you can specify the separator:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

<h2>Popping and Pushing</h2>
<h3>
<br>

**pop()**</h3>
The pop() method returns the value that was "popped out"

We can put that value into a var
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
```
<br>

**push()**</h3>

The push() method adds a new element to an array (at the end)
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// returns 5
```
The push() method returns the new array length

<br>
<h3>

**shift()**</h3>

shift is equivalent to pop, but working on the first element instead of the last.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
// returns Banana
```
The shift() method returns the value that was "shifted out"
<br>
<h3>

**unshift()**</h3>

Adds a new element to an array (at the beginning)

The unshift() method returns the new array length.
<br>
<h3>

**JavaScript Array length**</h3>

The length property provides an easy way to append a new element to an array

The unshift() method returns the new array length.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
// adds Kiwi
```
<br>
<h3>

**delete()**</h3>

 leaves undefined holes in the array.
<br>
<br>
<h3>

**concat()**</h3>

Creates a new array by merging (concatenating) existing arrays:

The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can also take strings as arguments,**and add the strings into a new array**

<br>
<br>
<h3>

**splice()**</h3>

Adds new items to an array
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
```
With clever parameter setting, you can use splice() to *remove elements* without leaving "holes" in the array

**I for now prefer using pop() for removal**

<br>
<br>
<h3>

**slice()**</h3>

The slice() method slices out a piece of an array into a new array.

The slice() method does not remove any elements from the source array.

The slice() method can take two arguments.

The method then selects elements from the start argument, and up to (but not including) the end argument. If the end argument is omitted it slices out the rest of the array.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
```
With clever parameter setting, you can use splice() to *remove elements* without leaving "holes" in the array

**I for now prefer using pop() for removal**

<br>

<h2>Automatic toString()
</h2>

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.


This is always the case when you try to output an array.