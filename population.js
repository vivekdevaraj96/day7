// Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=()=>{
    var data=JSON.parse(request.response);
    

    var output=data.filter((x)=>{
        if(x.population<200000){
            
            console.log(x.name.common);
            
         }
    }
    )

   
}