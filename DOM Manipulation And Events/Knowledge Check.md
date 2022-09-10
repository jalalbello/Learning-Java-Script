# Knowledge Check

- What is the DOM?
  > The document object model, its how the browser parses the html
- How do you target the nodes you want to work with?
  > document.querySelector()
- How do you create an element in the DOM?
  >document.createElement()
- How do you add an element to the DOM?
  >document.appendChild()
- How do you remove an element from the DOM?
  > parentNode.removeChild(child)
- How can you alter an element in the DOM?
  > .style.color
  > .setAttribute
- When adding text to a DOM element, should you use textContent or innerHTML? Why?
  > Text content for security reasons
- Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
  > End or head/defer
- How do “events” and “listeners” work?
  > Listeners They work by reacting to the event
- What are three ways to use events in your code?
  > on Html, on script, on file
- Why are event listeners the preferred way to handle events?
  > Makes for cleaner code, and we have more properties and optinos
- What are the benefits of using named functions in your listeners?
  > Cleaner code and reusability
- How do you attach listeners to groups of nodes?
  > querySelector all
- What is the difference between the return values of querySelector and querySelectorAll?
  > one is a string, the other is a nodelist
- What does a “nodelist” contain?
  > References to all of the matches of the selectors
- Explain the difference between “capture” and “bubbling”.
  >The three phases of event propagation are: capturing, target, and bubbling.
  >> Event capturing is from the outermost to the target element
  >> “bubbling”, bubble up or propagate the DOM tree upwards.
  