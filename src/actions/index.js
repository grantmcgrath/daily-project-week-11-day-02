
//select book is an action creator, it will need an action type

const BOOK_SELECTED = "BOOK_SELECTED";

export function selectBook(book) {

  return {
    //You should create a Type and Payload for your Action here
    type: BOOK_SELECTED,
    payload: book
  };
};
