
var data = [10,20,30,40] // + 100

console.log(data)

var newArray=data.map(function(element,index){
           var result=  element + 100
    return result // [110,120,130,140]
});

   console.log(newArray)