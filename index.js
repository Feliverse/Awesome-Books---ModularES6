import getInputValues from './modules/add-book.js';
import { goAdd, goContact, goList } from './modules/navigator.js';
import removeBook from './modules/remove-book.js';
import localStorageOnLoad from './modules/localstorage-onload.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
const clock = document.getElementById('clock-time');
clock.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

window.getInputValues = getInputValues;
window.goAdd = goAdd;
window.goContact = goContact;
window.goList = goList;
window.removeBook = removeBook;
localStorageOnLoad();