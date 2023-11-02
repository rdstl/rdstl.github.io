const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';
let data = null

getApi();

function getApi(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(dataApi =>{
    data=dataApi

   highestAssistance(data); 
   lowestAssistance(data); 
   largerAssistance(data);  
  
  
   upcomingByCategory(data);
   pastByCategory(data);
  }) 
  .catch(error => console.log(error))
}


//                                         table 1
function highestAssistance(datax)
{
   let highestA = datax.events.sort((a,b) => b.assistance/b.capacity-a.assistance/a.capacity).slice(0,5); 
   for(elemento of highestA)
   {
     // console.log(elemento.name + "   " + ((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%" );  

    rowTable1 = `
      <tr>
         <th scope="row">${elemento.name}</th> 
         <td>${((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%"}</td>
      </tr>   `; 
         
         document.getElementById("eventsWithHighestAssistance").innerHTML += rowTable1;   

   }
}



function lowestAssistance(datax)
{
   let lowestA = datax.events.sort((a,b) => a.assistance/a.capacity-b.assistance/b.capacity).slice(0,5);
   for(elemento of lowestA)
   {
      //console.log(elemento.name + "   " + ((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%" ); 
      rowTable1 = `
      <tr>
         <th scope="row">${elemento.name}</th> 
         <td >${((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%"}</td>
         
      </tr>   `; 
         
         document.getElementById("eventsWithlowestAssistance").innerHTML += rowTable1; 
         

         
   }
}
function largerAssistance(datax)
{
   let largertA = datax.events.sort((a,b) => b.capacity-a.capacity).slice(0,5);
   for(elemento of largertA)
   {
      //console.log(elemento.name + "   " + elemento.capacity.toLocaleString());  
      
      rowTable1 = `
         <tr>
            <th scope="row">${elemento.name}</th> 
            <td >${elemento.capacity.toLocaleString()}</td>
            
         </tr>   `; 
            
            document.getElementById("eventsWithLargerCapacity").innerHTML += rowTable1; 

   }
   
}



//                                      table 2
let table2= [];
function upcomingByCategory(datax)
{
  /*  console.table(datax.events);  */
   let categories = [...new Set(datax.events.map(element => element.category))  ]
  /*  console.table(categories);  */

   categories.forEach(categoria=>{
      let row = 
      {
         category: categoria,
         revenues: 0,
         assistancePercentage: 0,
      }

      let revenuesAcc = 0;
      let assistancePercentage = 0;
      let assistancePercentage2 = 0;
       
      dateRef=datax.currentDate

      datax.events.filter(element => (element.date>dateRef)).filter(element => (element.category == categoria)).forEach(element => 
         {
            revenuesAcc+= (element.price*element.estimate)
            assistancePercentage2=((assistancePercentage2 + element.estimate*100/element.capacity)/2)
         
         })
      row.revenues = revenuesAcc;
      row.assistancePercentage = assistancePercentage2;

      table2.push(row); 

/*     console.table(row); */
 
   })


  /*   console.table((table2.sort((a,b) => b.revenues-a.revenues)).slice(0,3));   */
   let rowTable2;
   result2 = table2.sort((a,b) => b.revenues-a.revenues).slice(0,5)
   for (elemento of result2) 
   {
      let rowTable2 = ``;
      //console.log(elemento.category + " " + elemento.revenues.toLocaleString() + " " + elemento.assistancePercentage.toFixed(2))

      rowTable2 = `
      <tr>
         <th scope="row">${elemento.category}</th> 
         <td >${elemento.revenues.toLocaleString()}</td>
         <td >${elemento.assistancePercentage.toFixed(2)}%</td>
      </tr>   `; 
         
         document.getElementById("upByCategory").innerHTML += rowTable2;  
   }
}






//                                      table 3
let table3= [];
function pastByCategory(datax)
{
 
   let categories = [...new Set(datax.events.map(element => element.category))  ]
  /*  console.table(categories);  */

   categories.forEach(categoria=>{
      let row = 
      {
         category: categoria,
         revenues: 0,
         assistancePercentage: 0,
      }

      let revenuesAcc = 0;
      let assistancePercentage = 0;
      let assistancePercentage2 = 0;
       
      dateRef=datax.currentDate

      datax.events.filter(element => (element.date<dateRef)).filter(element => (element.category == categoria)).forEach(element => 
         {
            revenuesAcc+= (element.price*element.assistance)
            assistancePercentage2=((assistancePercentage2 + element.assistance*100/element.capacity)/2)
         
         })
      row.revenues = revenuesAcc;
      row.assistancePercentage = assistancePercentage2;

      table3.push(row); 

 
   })

/* 
   console.table((table3.sort((a,b) => b.revenues-a.revenues)).slice(0,3)); */

   result3 = table3.sort((a,b) => b.revenues-a.revenues).slice(0,5)
   for (elemento of result3) 
   {
      let rowTable2 = ``
      //console.log(elemento.category + " " + elemento.revenues.toLocaleString() + " " + elemento.assistancePercentage.toFixed(2))
   
       let rowTable3 = `
      <tr> 
      <th scope="row">${elemento.category}</th>
         <td>${elemento.revenues.toLocaleString()}</td>
         <td>${elemento.assistancePercentage.toFixed(2)}%</td>
      </tr>`; 


     // console.log(rowTable3);  
     document.getElementById("pastByCategory").innerHTML += rowTable3;  

    
   
   }





}


