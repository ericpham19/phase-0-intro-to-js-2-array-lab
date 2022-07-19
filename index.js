// Write your solution here!


const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
        cats.push("Ralph");

}

function destructivelyPrependCat(){
        cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
       cats.splice(2);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}


function appendCat(Broom){
    const newCats= [...cats, Broom];
    return newCats;
}

function prependCat(){
    const newCats = ["Arnold", ...cats]
    return newCats;
}


function removeLastCat(){
    const newCats = cats.slice(0, cats.length -1);
    return newCats;
}

function removeFirstCat(){
    const newCats= cats.slice(1);
    return newCats;
}