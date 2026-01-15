// syntex of creating variable

// functon

const obj1 = {
    id: 101,
    name: "growTech",
    info: {
        name:"DRE",
        Rename: "1 cr",
    },
    address: "C21"
}

const obj2=Json.parse(Json.stringify(obj1))
obj1.id= 102
console.log(obj1)
obj2.id = 300
console.log(obj2)