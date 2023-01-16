import library from './library.js';
import showOnScreen from './show-on-screen.js';

const localStorageOnLoad = () => {
  window.addEventListener('load', () => {
    const localStorageItem = window.localStorage.getItem('books');
    if (localStorageItem) {
      library.bookArray = JSON.parse(localStorageItem);
      library.bookArray.forEach((element) => {
        showOnScreen(element);
      });
    }
  });
};

export default localStorageOnLoad;