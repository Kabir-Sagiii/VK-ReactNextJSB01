var data :unknown ;

data = "Kabir";

//type assertion is way to tell ts this is the data type of a variale
var newdata = data as string

console.log(newdata.toUpperCase())

data = 100
var result = data as number + 90

