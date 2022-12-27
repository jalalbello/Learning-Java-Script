# The Single Responsibility Principle

```
The Single Responsibility Principle is a software design principle that states that each class or module should have a single, specific responsibility and should be designed to fulfill that responsibility well.
```

> Do this to reduce the complexity of software systems by limiting the number of changes that need to be made to a particular class when the requirements of the system change. It also promotes code reuse,
>

```jsx
class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  markComplete(item) {
    let index = this.items.indexOf(item);
    if (index >= 0) {
      this.items[index].isComplete = true;
    }
  }

  markIncomplete(item) {
    let index = this.items.indexOf(item);
    if (index >= 0) {
      this.items[index].isComplete = false;
    }
  }
}

class TodoItem {
  constructor(name) {
    this.name = name;
    this.isComplete = false;
  }
}

class TodoListDisplay {
  constructor(todoList) {
    this.todoList = todoList;
  }

  displayList() {
    let listElement = document.getElementById('todo-list');
    listElement.innerHTML = '';
    for (let item of this.todoList.items) {
      let itemElement = document.createElement('li');
      itemElement.textContent = item.name
    }

```

# Open/Closed Principle: 

Software should be open for extension but closed for modification. This means that new functionality should be added by creating new code, rather than changing existing code

I did an exercice with help of chat gpt, here is what it had to say:
```
It looks like you did a good job designing the classes for this shipping system. Here are a few points to consider:

    You defined the Package class to store information about a package, including its weight and destination, which is consistent with the defined responsibilities of the class.
    You defined the ShippingMethod class to calculate the cost of shipping a package based on its weight and destination, and you made it a parent class for different shipping methods, which is consistent with the defined responsibilities of the class.
    You defined several subclasses of ShippingMethod for different shipping methods (ground, air, and express), and each subclass implements its own specific pricing rules for shipping packages, which is consistent with the defined responsibilities of these classes.
    You followed the Open/Closed Principle by designing the ShippingMethod class to be open for extension (able to support new shipping methods) but closed for modification (the existing implementation should not need to be changed to support new shipping methods).

There are a few small improvements that you could make to the code:

    In the GroundShippingMethod, AirShippingMethod, and ExpressShippingMethod classes, you could consider using the get keyword to define a price property that returns the result of calling the calcFormula() method, instead of using a formula property that returns the result of the calcFormula() method. This would be more consistent with the design of the ShippingMethod class
```

# Liskov Substitution Principle 

If a class is derived from another class, then the derived class should be able to be used in  the same way.

To understand the concept, I made a classes in the assignement chat gpt gave me to understand the concept, in those classes the startEngine method behave the same way, no matter if its a car or Electric car Object 

# Interface segregation principle

The Interface Segregation Principle (ISP) states that clients should not be forced to depend on interfaces they do not use. To achieve this, interfaces should be divided into smaller, more specific ones that clients can choose to implement. Doing so increases flexibility, maintainability and reduces the chances of introducing errors.

> Example: Making classes that do not have methods that they do not use
> 
# Dependency Inversion principle