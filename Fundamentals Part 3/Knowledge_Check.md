# Knowledge_Check


- What are functions useful for?
> To avoid Repeating code, and making complex programs
- How do you invoke a function?
> Functionname()
- What are anonymous functions?
>A function that doesn't have a name:
> 
> > Example of use : the addEventListener(), this function expects you to pass it (at least) two parameters:
> >>- the name of the event to listen for, 
> >>- a function to run when the event happens.
>
>If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
``` js
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
```
- What is function scope?
- What are return values?
- What are arrow functions?