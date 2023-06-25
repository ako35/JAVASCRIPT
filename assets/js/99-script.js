import {numberSortASC, numberSortDESC, stringSortASC, stringSortDESC, randomMix} from './sort.js';

const arr1=['Ali', 'Veli', 'Hasan', 'Can', 'Ahmet', 'Mehmet'];
const arr2=[60, 62, 64, 56, 58, 99, 80, 48, 66];

document.getElementById('btn1').addEventListener('click', () => {
    console.log(stringSortASC(arr1));
})

document.getElementById('btn2').addEventListener('click', () => {
    console.log(stringSortDESC(arr1));
})

document.getElementById('btn3').addEventListener('click', () => {
    console.log(numberSortASC(arr2));
})

document.getElementById('btn4').addEventListener('click', () => {
    console.log(numberSortDESC(arr2));
})

document.getElementById('btn5').addEventListener('click', () => {
    console.log(randomMix(arr2));
})



