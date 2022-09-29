const dice = document.querySelector(".dice");
const btn = document.querySelector(".roll");
const result = document.querySelector("#result");

function handleBtn() {
  const ranNum = Math.floor(Math.random() * 7);
  if (ranNum > 0 && ranNum < 7) {
    rollDice(ranNum);
  } else {
    handleBtn();
  }
}

const rollDice = (random) => {
  dice.style.animation = "rolling 4s";

  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        result.innerText = "1";
        break;
      case 2:
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        result.innerText = "2";
        break;
      case 3:
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        result.innerText = "3";
        break;
      case 4:
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        result.innerText = "4";
        break;
      case 5:
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        result.innerText = "5";
        break;
      case 6:
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        result.innerText = "6";
        break;
      default:
        break;
    }
    dice.style.animation = "none";
  }, 4050);
};

btn.addEventListener("click", handleBtn);
