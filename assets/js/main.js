
function sendCard(cardImage, cardId, cardName, cardDescription, cardDate, cardPrice, cardIdContainer )
{
   let card = `<div class="cards" id="card">
                  <a href="./details.html?id=${cardId}"><img class="img-card" src="${cardImage}" alt="book"></a>
               </div>`;

   document.getElementById(cardIdContainer).innerHTML += card;
}

// la funcion sendCard envia la card al archivo index.html