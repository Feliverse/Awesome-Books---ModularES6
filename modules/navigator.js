const List = document.getElementById('listTab');
const AddNew = document.getElementById('addNewTab');
const contactTab = document.getElementById('contactTab');

const goList = () => {
  List.style.display = 'block';
  AddNew.style.display = 'none';
  contactTab.style.display = 'none';
};
const goAdd = () => {
  List.style.display = 'none';
  AddNew.style.display = 'block';
  contactTab.style.display = 'none';
};
const goContact = () => {
  List.style.display = 'none';
  AddNew.style.display = 'none';
  contactTab.style.display = 'flex';
};
export { goList, goAdd, goContact };