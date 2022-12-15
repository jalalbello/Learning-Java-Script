removeBtn.addEventListener('click', (item) => {
    // Find the index of the card in the myLibrary array
    const index = myLibrary.indexOf(item);
    // Remove the card from the myLibrary array
    myLibrary.splice(index,1);
    setData();
    // Get the element that represents the card
    const cardElement = document.querySelector(`#card-${index}`);
    // Remove the card element from the DOM
    cardElement.remove();
  });
  

  removeBtn.addEventListener('click', (event) => {
    // Get the item that was clicked on
    const item = event.target.parentElement;
    // Find the index of the item in the objects array
    const index = objects.indexOf(item);
    // Check if the item was found in the array
    if (index !== -1) {
      const cardElement = document.querySelector(`#card-${index}`);
      // Remove the card element from the DOM
      cardElement.remove();
      myLibrary.splice(myLibrary.indexOf(item),1);
      setData();
      myLibrary.forEach(book => {
        render(book);
      });
    }
  });
  