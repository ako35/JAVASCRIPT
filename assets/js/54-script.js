const arr = [450, 550, 750, 25, 2250];

const arrPricesEl = document.querySelector("#arrPrices");
const btnGetPrices = document.querySelector("#btnGetPrices");
const arrNewPricesEl = document.querySelector("#arrNewPrices");

arrPricesEl.innerHTML = arr;

btnGetPrices.addEventListener("click", () => {
    const result = setPrices(arr,20);
    if(result){
        arrNewPricesEl.innerHTML = result;
    }
    else{
        alert('Please send an array and a rate');
    }
})

const setPrices = (arr, rate) => {
  if (!arr || !Array.isArray(arr) || arr.length <= 0) return arr;
  if (!rate || isNaN(rate)) return arr;

  const newArr = Object.assign([],arr);

  for(let i = 0; i< newArr.length; i++){
    newArr[i] = (newArr[i] + newArr[i] * rate / 100);
  }
  return newArr;
};
