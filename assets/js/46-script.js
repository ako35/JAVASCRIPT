const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");
const txtResult = document.querySelector("#txtResult");

btnAverage.addEventListener("click", () => {
  if(!isScoreValid(txtScore1.value) || !isScoreValid(txtScore2.value) || !isScoreValid(txtScore3.value)){
    return alert('Please enter valid scores');
  }

  const average = getAverage(Number(txtScore1.value), Number(txtScore2.value), Number(txtScore3.value));
  txtResult.innerHTML = `Your average is ${average}`;
});

const convertScoreToLetter = (score) => {
    let letter = ""

    if (score >= 90) {
        letter = "A"
    }
    else if (score >= 80) {
        letter = "B"
    }
    else if (score >= 70) {
        letter = "C"
    }
    else if (score >= 60) {
        letter = "D"
    }
    else {
        letter = "F"
    }
    return letter;
}

const getAverage = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
}

const isScoreValid = (score) => {
  return (
    score &&
    !isNaN(score) &&
    score <= 100 &&
    score >= 0
  );
};
