const myObj = {
    js: 'javascript',
    cpp: 'cpp',
    rc: 'ruby',
    py: 'python',
    swift: 'swift' 
}

// for (const key in myObj) {
//     console.log(`${key} extension is for ${myObj[key]}`);
// }


const programming = ["js", "cpp", "py", "rb", "swift"];
for (const key in programming) {
    console.log(key); 
    console.log(typeof key); // string
    // returns index in case of array
}

const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

for(const key in map){
// Map not iterable with for in
    console.log(key);
    // thus no output
    // i.e. does not return anything
}