
function sendCard(cardImage, cardId, cardName, cardDescription, cardDate, cardPrice, cardIdContainer )
{
   let card = `<div class="cards">
                 <a href="./details.html?id=${cardId}"><img class="img-card" src="${cardImage}" alt="book"></a>
                
               </div>`;

   document.getElementById(cardIdContainer).innerHTML += card;
}
