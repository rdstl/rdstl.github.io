 function sendFilter(filterCategory, filterId, filterIdContainer )

{ let filter = `

<div class="form-check col-5 col-sm-5 col-md-5 col-lg">
   <input type="checkbox" class="form-check-input ${filterCategory}" " id="${filterId}" value="${filterCategory}">
   <label class="form-check-label" for="${filterId}">${filterCategory}</label>
</div>`;

    document.getElementById(filterIdContainer).innerHTML += filter;

} 


function sendCard(cardImage, cardName, cardDescription, cardDate, cardPrice, cardId, cardIdContainer ){
         
   let card = `
   <div class="col-12 col-sm-6 col-md-4 col-xl-3">
      <div class="card alto">
            <img src="${cardImage}" class="card-img-top altoimg" alt="${cardName}">
            <div class="card-body">
              <h5 class="card-title">${cardName}</h5>
               <p class="card-text">${cardDescription}</p>
               <p class="card-text">Price: $ ${cardPrice}.-</p>
               <a href="./details.html?id=${cardId}" class="mt-auto btn btn-danger detalle">Details</a>
            </div>
      </div>
   </div>`;
   document.getElementById(cardIdContainer).innerHTML += card;
}


/*                                                   functions         */
function dateFilter(ordenamiento, hup)
{
   if(hup==0)
   {
      let arre = ordenamiento;
      return arre;
   }
}


function categoryFilter(arreglo)
{
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"));
    let checkedboxes = checkboxes.filter(check => check.checked);
    let valores = checkedboxes.map(chAz => chAz.value);
    if(valores.length == 0)
    {
        return arreglo
    }
    let arre2 = arreglo.filter(categ => valores.includes(categ.category));  
    return arre2;
}

function nameFilter(arreglo, texto)
{
   let arre3 = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()))

  return arre3;
}

