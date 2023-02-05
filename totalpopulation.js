// Print the total population of countries using reduce function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=()=>{
    var data=JSON.parse(request.response);

    
    var values=[];
    
     data.forEach(element => {
        values.push(element.population ? element.population : 0)
     });   
     
    


    
function sum(a,b){
    return a+b;
}
console.log(values.reduce(sum));
   

   
}