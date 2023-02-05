// Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();
var h=[]
request.onload=()=>{
    var data=JSON.parse(request.response);

  
    data.forEach((a)=>{
      h.push([
        a.name ? a.name.common : "notfound", 
        a.capital && a.capital.length > 0 ? a.capital[0] : "notfound",
        a.flag ? a.flag : "notfound",]
      )
        
    }
    
    )
    h.forEach((s)=>{
        console.log(s[0],s[1],s[2]);
    }
    
    )



}