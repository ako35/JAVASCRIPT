const hourEl=document.querySelector('#clock li:nth-child(1)');
const secondEl=document.querySelector('#clock li:nth-child(2)');
const minuteEl=document.querySelector('#clock li:nth-child(3)');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
hourEl.innerHTML = hours.toString().length===1 ? `0${hours}` : hours;
minuteEl.innerHTML = minutes.toString().length===1 ? `0${minutes}` : minutes;
secondEl.classList.toggle('hidden');

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    hourEl.innerHTML = hours.toString().length===1 ? `0${hours}` : hours;
    minuteEl.innerHTML = minutes.toString().length===1 ? `0${minutes}` : minutes;
    secondEl.classList.toggle('hidden');
},1000);

