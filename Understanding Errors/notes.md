# The Anatomy of an Error

An error is a type of object in JS, it consists of name/type and a message

They contain crucial info:
- The first part of an error displays the type of error
  > Understanding both the type and message is crucial to comprhension
- The next part gives the name of the file and the line number
  > Sometimes the browser’s console will also display the column(index of line at wich the error is thrown)
- The stack trace
  > Trace the evolution of an error back to its origin



# Types of error

<h3><strong>Reference Error</strong></h3>

- Its thrown when we refer to an non init or outofscope var
- Or when we didn't spell the error correctly
<h3><strong>Syntax Error</strong></h3>

- Its thrown when we don't respect the gramatical rules of JS

<h3><strong>Type Error</strong></h3>

- An operand or argument passed to a function is incompatible with the type expected by it
  
- Or when attempting to modify a value that cannot be changed
- Or when attempting to use a value in an inappropriate way.
> A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or operation against.

# Tips for solving errors

- Read the error carefully and try to undestand it on your own
- Google
- Use the debbuger
- Debbuger is great, but u can still find console.log() or .table() or .trace() a good tool

# Errors VS. Warnings

Meany ppl meet warnings and treat em as errors. Errors will stop the execution of the program/process , Warnings provide insight on potential problems.

> They likely are not as significant and informational

