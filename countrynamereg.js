



// Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=()=>{
     var data=JSON.parse(request.response);
 
     var output=data.filter((a)=>{
        if(a.continents[0]=="Asia"){
            console.log(a.name.common);
        }
     }
    )
  
  
}


