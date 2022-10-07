const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, param1, param2) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === param1) {
            array.splice(i, 1, param2);
        } else if (array[i] === param2) {
            array.splice(i, 1, param1); 
        }
    }
}

swap(names, 'Mesirve', 'Cristiano Romualdo')

console.log(names);