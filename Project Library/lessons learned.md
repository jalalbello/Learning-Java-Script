# JS

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

## Append multiple elements

```jsx
displayBookSection.append(itemElement, removeBtn);
```

## Add classes in diffrent ways

```jsx
element.classList.add('my-class');
element.className += ' my-class';
// set it to the current classes plus the new class,
element.setAttribute('class', element.getAttribute('class') + ' my-class');
```

## Event delegation

This allows us to attach the event listener to a parent element, and then specify the elements we want to listen for events on.
> We can attach the event listener to a signle parent, and it will be trigerred for any child elements that match the specific selector
>
```jsx
  const parentElement = document.querySelector("#displayBook");
  parentElement.addEventListener("click", (event) =>{
    if (event.target.matches("button.removeBtn")){
      console.log(1);
    }
  })
```

## Set data

```jsx
function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
```
## Get data

```jsx
let objects = localStorage.getItem('myLibrary')
objects = JSON.parse(objects);
```

## Remove button

```jsx
removeBtn.addEventListener('click', (event) => {
      const item = event.target.parentElement;
      item.remove();
    });
```
