import library from './library.js';
import showOnScreen from './show-on-screen.js';

const getInputValues = () => {
  const bookEntries = {
    title: null,
    author: null,
  };

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookEntries.title = titleInput.value;
  bookEntries.author = authorInput.value;

  library.add(bookEntries);

  titleInput.value = '';
  authorInput.value = '';

  window.localStorage.setItem('books', JSON.stringify(library.bookArray));
  showOnScreen(bookEntries);
};

export default getInputValues;