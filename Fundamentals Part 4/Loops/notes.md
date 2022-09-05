# Loops

<h2>Looping through a collection</h2>


Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

> Example of type of collections is the Array, Set and Map.

<br>
<h3>

**The for...of loop**

</h3>

The basic tool for looping through a collection is the for...of loop:

```js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
```
<br>
<h3>

**map()**

</h3>

JS also has more specialized loops for collections

You can use map() to do something to each item in a collection and create a new collection containing the changed items:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
}
```

Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. 

It then adds the return value from each function call to a new array, and finally returns the new array.

<br>
<h3>

**filter()**

</h3>

We can use filter() to test each item in a collection, and create a new collection containing only items that match.

```js
function lCat(cat) {
  return cat.startsWith('L');
}

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array.

<br>
<h3>

**The standard for loop**

</h3>
If we don't have a collection of items to loop through and want to run the same code x times

```js
Syntax

for (initializer; condition; final-expression) {
  // code to run
}
```
Initializer :
> Is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a **counter variable**.
>
Condition:

>This defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the **exit condition** has been met.

A final-expression:

>Is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the **counter variable**, to bring it closer to the point where the condition is no longer true

<br>
<h3>

**When to use standard for loop in collenctions**

</h3>

If we want to loop through all items:
    
> start i at 0, and condtions is stopping when i reaches the length of the array.
>>Then inside the loop we're using i to access each item in the array in turn.

For example if we want to do something in the final interation of the items, we cannot use the for of loop

In this case we can do something like this
```js
    const cats = ['Pete', 'Biggles', 'Jasmine'];

    let myFavoriteCats = 'My cats are called ';

    for (let i = 0; i< cats.length; i++){
        //  last array index is at length - 1, and we want to modify last output
        // we use most likely condition first(that its likely not last) to save runtime
        if (i != cats.length-1){
            myFavoriteCats += `${cats[i]}, `
        }
        else{
            myFavoriteCats += `and ${cats[i]}.`
        }
    }
    console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."

```

<br>
<h3>

**Exiting loops with break**

</h3>


```js

```
<br>
<br>
<h3>

**When to use standard for loop in collenctions**

</h3>


```js

```
<br>