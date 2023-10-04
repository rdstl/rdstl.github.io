let params = new URLSearchParams(window.location.search)
let id = parseInt(params.get("id"));


searchBook(id);

function searchBook(id) 
{
   for(let book of data.books)
   {
      //console.log("id " + id);
      //console.log("_id " + book._id);

      if (id===book._id)
      {
         //console.log("encontrado!!!");
         //console.log( typeof(id) +" "+ id + " - " +typeof(book._id) +" "+ book._id);  */
         //console.log(book.name);
         makeDetail( book.image, book.name, book.description, book.date, book.category, book.autor, book.editor, book.price, 'card-container-detail'); 
         return 
      }
   }
};
 

function makeDetail(detailImg, detailname, detaildescription, detaildate, detailcategory, detailautor, detaileditor, detailprice, idContainer) {
 
    let detail =  `
    <div class="detail-cards">
    <img class="img-detail-card" src="${detailImg}" alt="book" >
    </div>
    <div>
     <h2>${detailname}</h2>
      <p>${detailautor}</p>
      <p>${detaildescription}</p>
      <p>${detaileditor}</p>
      <p>Precio u$s ${detailprice}.-</p>
      <button id="goBack-button" onclick="goBack()"> regresar</button>
     </div>
    `;
    
    document.getElementById(idContainer).innerHTML += detail;
}


