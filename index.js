// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push('Ralph')
    return cats
}

function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(Broom){
    let moreCats = [...cats, 'Broom']
    return moreCats
}

function prependCat(Arnold){
    let moreCats = ['Arnold',...cats]
    return moreCats
}

function removeLastCat(){
    let differentCats = cats.slice(0,cats.length-1)
    return differentCats
}

function removeFirstCat(){
    let differentCats = cats.slice(1)
    return differentCats
}