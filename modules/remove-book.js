import library from './library.js';

export default function removeBook(id) {
  const addBook = document.getElementById('book');
  const rmv = 'Rmv';
  for (let i = 0; i < addBook.children.length; i += 1) {
    const selected = addBook.children[i];
    if (selected.id + rmv === id) {
      addBook.removeChild(selected);
      library.remove(i);
      window.localStorage.setItem('books', JSON.stringify(library.bookArray));
    }
  }
}