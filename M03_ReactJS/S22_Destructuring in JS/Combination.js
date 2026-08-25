// Level 3
var data = [
    {
        info : [10,20,{city:"hyd"}]
    }
]

console.log(data[0].info[2].city)

const [{info:[, , {city}]}] = data

console.log(city)