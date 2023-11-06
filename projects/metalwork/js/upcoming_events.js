const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';
let data = null
getApi();

function getApi(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(dataApi =>{
    data=dataApi
    makeFilters(data, 'filterContainer'); 
    makeCards(data.events, 'upcomingEventsContainer');
 
    filterContainer.addEventListener("change", filtro);
    texto.addEventListener("input",filtro)
    
    function filtro()
    {
      let byDate = dateFilter(data.events, 0); 
      let byCategory = categoryFilter(byDate);
      let byName = nameFilter(byCategory, texto.value);
      
      makeCards(byName, 'upcomingEventsContainer'); 
      
    }
      
   
  }) 
  .catch(error => console.log(error))
}



function makeFilters(datax, idfilter)
{
  const uniquecategories = datax.events.reduce((categories, event) => 
  {
    if (!categories.includes(event.category)) 
    {
      categories.push(event.category);
      
      sendFilter(event.category, event._id, idfilter); 

    }
    return categories;
  }, []);
}
/* makeFilters('filterContainer');  */


/*                        Cartas 


*/
function makeCards(datax, idContenedor)
{
  document.getElementById(idContenedor).innerHTML = "";
   let fecharef = data.currentDate

   for(let event of datax)
      if (fecharef<event.date){ 
      {
         sendCard(event.image, event.name, event.description, event.date, event.price, event._id, idContenedor);
    
      }
   }
};

/* makeCards(data.events, 'upcomingEventsContainer'); */


/*                                                          filters */
const filterContainer = document.getElementById('filterContainer')
const texto = document.getElementById('texto');

/* filterContainer.addEventListener("change", filtro);
texto.addEventListener("input",filtro)

function filtro()
{
  let byDate = dateFilter(data.events, 0); 
  let byCategory = categoryFilter(byDate);
  let byName = nameFilter(byCategory, texto.value);
   
  makeCards(byName, 'upcomingEventsContainer'); 
 
} */