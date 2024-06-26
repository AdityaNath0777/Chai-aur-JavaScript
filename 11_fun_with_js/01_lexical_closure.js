function bolNamaste(){
    var koko = 'KoKo Nath'

    function antarAtma(){
        console.log(`${koko} ko antar aatma se Namaste`);
    }
    function antar2(){
        console.log('antar 2');
        
    }
    
    antarAtma();
    antar2();



}

var jojo = 'Ram Raam';
bolNamaste();

// console.log(`${koko} ko Global EC se Namaste`); // not defined
// console.log();


/**
 * if fn -> has another fn
 * then they share the memory
 * 
 * but inner1, inner2, ... will all be separated and don't share exact same memory locations
 * thus they can't share each other's variables
 * 
 * Only the parent fns' variables
 * 
 * // this is called Closure -> sharing of memory
 */

/**
 * Lexical Scoping -> outer & inner fn
 * Closure -> when we return a complete fn -> it returns Lexical Scope
 */

function makeFunc(){
    const name = 'Jai Ho';
    function displayName(){
        console.log(name);

    }
    return displayName; // returning a fn reference
}

const myFunc = makeFunc();
myFunc();

