const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (text === array[i]) {
            return array.indexOf(array[i]);
        }
    }
}


console.log(findArrayIndex(animales, 'Ajolote'));