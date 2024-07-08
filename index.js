// Write your solution here!
const cats = ["Milo","Otis","Garfield"] 

const destructivelyAppendCat = (name) => {
    cats.push(name);
}

const destructivelyPrependCat = (name => {
    cats.unshift(name);
})

const destructivelyRemoveLastCat = (name) => {
    {cats.pop();}
}

const appendCat = (name) => {
    return [...cats, name];
}

const prependCat = (name) => {
    return [name, ...cats]
}

const removeLastCat = (name) => {
    return cats.slice(0, cats.length -1);
}

const removeFirstCat = (name) => {
    return  cats.slice(1);
}

const destructivelyRemoveFirstCat = (name) => {
    cats.shift();
}
  