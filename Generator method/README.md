```jsx
async function getData() {
  const response = await fetch('https://example.com/data.json');
  const data = await response.json();
  return data;
}

function* generatorMethod() {
  console.log('Started generator');
  const data = yield getData();
  console.log('Got data:', data);
  console.log('Finished generator');
}

const generator = generatorMethod();
const promise = generator.next().value;

promise.then(data => {
  generator.next(data);
});
```

In this example, the getData function is an async function that makes a request to a server to retrieve some data. The generatorMethod function is a generator that uses the yield keyword to pause the generator and wait for the getData function to complete.

When you call the generator's next method, it will start executing the generator and reach the yield keyword. At this point, the generator will pause and return a promise to the caller, which represents the async task that is being performed.

The caller can then use the then method on the promise to specify a callback that should be called when the async task is complete. In this example, the callback calls the generator's next method with the data that was returned by the async task, which allows the generator to resume execution and finish.