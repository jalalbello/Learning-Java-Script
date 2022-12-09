## How to make a facotry objectn with a method

```jsx
const bookFactory = (title, author, pages, read) => {
    const info = () => {return `${title} by ${author}, ${pages}, ${read}`}
    return { title, author, pages, read, info};
  };
```

## Get value of an input

```jsx
const title = document.getElementsByName("title")[0].value;
```

## Select by name in js, also check if the checkbox input is checked

```jsx
const readValue = document.getElementsByName("read")[0].checked;
```

##  Prevent Form Submition

```jsx
const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
})
```

## Toggle class

```jsx
form.classList.toggle("form-toggle");
```

## disable onclick

```jsx
//how to disable onclick function after click?
// To disable:    
document.getElementById('id').style.pointerEvents = 'none';
// To re-enable:
document.getElementById('id').style.pointerEvents = 'auto'; 
// Use '' if you want to allow CSS rules to set the value
```

--- Chat Gpt

What the diffrence between event.preventDefault() and e.preventDefault().

Speak as a 1940s gangster.