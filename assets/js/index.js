function makeCards(idContainer)
{
   var container = document.getElementById("container");
   
  for(let book of data.books)
  {
           
      sendCard(book.image, book._id, book.name, book.description, book.date, book.price, idContainer);
     
  }
};

makeCards('card-container');

// la funcion makeCards genera una card y 
// la envia a la funcion sendCard 
// para que la envie al archivo index.html