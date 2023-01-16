/* eslint-disable prefer-template */

const showOnScreen = (obj) => {
  const addBook = document.getElementById('book');
  const stringVal = obj.title;
  const idString = stringVal.replace(/\s/g, '');
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const removeBtn = document.createElement('button');
  const rmv = 'Rmv';
  const rmvBtn = idString + rmv;
  bookDiv.classList.add('book-container');
  bookTitle.classList.add('book-title');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerHTML = 'Remove';
  removeBtn.setAttribute('onclick', 'removeBook(this.id)');
  bookTitle.innerHTML = '"' + obj.title + '" by ' + obj.author;
  bookDiv.setAttribute('id', idString);
  removeBtn.setAttribute('id', rmvBtn);
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(removeBtn);
  addBook.appendChild(bookDiv);
};

export default showOnScreen;