function makeCards(idContainer)
{
  for(let book of data.books)
  {         
      sendCard(book.image, book._id, book.name, book.description, book.date, book.price, idContainer);
  }
};

makeCards('card-container');

