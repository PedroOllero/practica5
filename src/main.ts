let card: number = 0;
let puntuation: number = 0;
let puntuationBound: number = 0;

const getRandomNum = (): number => {
  let randomNum: number = Math.floor((Math.random() * 9) + 1);
  if (randomNum > 7) {
    return (puntuation = 0.5);
  } else {
    return (puntuation = randomNum);
  }
};

const gameHandler = (puntuation: number) => {
  if (puntuation < 4) {
    console.log("Has sido muy conservador");
  } else if (puntuation >= 5 && puntuation <= 7.5) {
    switch (puntuation) {
      case 5:
        console.log("Te ha entrado el canguelo eh");
        break;
      case 6:
        console.log("Casi casi...");
        break;
      case 7:
        console.log("Casi casi...");
        break;
      case 7.5:
        console.log("¡Lo has clavado! ¡Enhorabuena!");
        break;
    }
  }
};


const puntuationBoundHandler = (newNumber: number): number => {
  return (puntuationBound = puntuationBound + newNumber);
};

const hitMeHandler = () => {
  const hitMeButton = document.getElementById("pedir");
  if (hitMeButton instanceof HTMLButtonElement) {
    hitMeButton.addEventListener("click", () => {
      puntuationBoundHandler(getRandomNum());
      showPuntuation(puntuationBound);
      gameOver(puntuationBound)
    });
  }
};

const standHandler = () => {
  const standButton = document.getElementById("plantar");
  if (standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click", () => {
      gameHandler(puntuationBound);
    });
  }
};

const resetHandler = () => {
  let resetButton = document.getElementById("reset");
  if (resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => {
      puntuationBound = 0;
      showPuntuation(puntuationBound);
      gameOver(0)
    });
  }
};

const showPuntuation = (impressPuntuation: number) => {
  let impressPuntuationString: string = impressPuntuation.toString();

  let showPuntuationScreen = document.getElementById("puntuacion__numero");

  if (showPuntuationScreen instanceof HTMLElement) {
    showPuntuationScreen.textContent = impressPuntuationString;
  }
};

const gameOver = (puntuacion: number) => {
    const gameOverScreen = document.querySelector(".gameover")!;
    if(gameOverScreen instanceof HTMLParagraphElement && puntuacion > 7.5){
        gameOverScreen.classList.add("active");
    }else{
        gameOverScreen.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
  hitMeHandler();
  standHandler();
  resetHandler();
});
