const obj1 = {
    name: 'Bruce Wayne'
}

// we're breaking the link b/w obj1 and obj2
let obj2 = obj1;
obj2 = {
    name: 'Clark Kent'
}

console.log({ obj1 });