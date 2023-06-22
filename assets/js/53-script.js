const arr = [12,231,123,321,234,45,56,78,4,67,43,239];

const myArrayEl = document.querySelector('#myArray');
const btnGetGreatestNum = document.querySelector('#btnGetGreatestNum');
const greatestNumEl = document.querySelector('#greatestNum');

myArrayEl.innerHTML = arr;

btnGetGreatestNum.addEventListener('click', () => {
    const maxNumber= getMaxNumber(arr);
    if(maxNumber===false){
        greatestNumEl.innerHTML = "Array is empty";
    }
    else{
        greatestNumEl.innerHTML=maxNumber;
    }
})

const getMaxNumber = (arr) => {
    if(!arr || !Array.isArray(arr) || arr.length<=0) return false;

    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}