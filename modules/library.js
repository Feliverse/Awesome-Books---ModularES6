class BooksLibrary {
  constructor() {
    this.bookArray = [];
    this.add = (Obj) => {
      this.bookArray.push(Obj);
    };
    this.remove = (Obj) => {
      this.bookArray.splice(Obj, 1);
    };
  }
}

const library = new BooksLibrary();
export default library;