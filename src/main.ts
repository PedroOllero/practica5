let card: number = 0;
let randomNum: number = 0;
let puntuationBound: number = 0;

const getRandomNum = (): number => {
  randomNum = Math.floor(Math.random() * 10 + 1);
  if (randomNum > 7) {
    return randomNum + 2;
  }
  return randomNum;
};

const getValueHandler = (points: number): number => {
  if (points > 7) {
    return points = 0.5;
  } else {
    return points;
  }
};

const getCardHandler = (puntuation: number) => {
  const card = document.getElementById("carta");
  if (card instanceof HTMLImageElement) {
    switch (puntuation) {
        case 0:
        card.src = "";
        break;
      case 1:
        card.src = "assets/img/1_as-copas.jpg";
        break;
      case 2:
        card.src = "assets/img/2_dos-copas.jpg";
        break;
      case 3:
        card.src = "assets/img/3_tres-copas.jpg";
        break;
      case 4:
        card.src = "assets/img/4_cuatro-copas.jpg";
        break;
      case 5:
        card.src = "assets/img/5_cinco-copas.jpg";
        break;
      case 6:
        card.src = "assets/img/6_seis-copas.jpg";
        break;
      case 7:
        card.src = "assets/img/7_siete-copas.jpg";
        break;
      case 10:
        card.src = "assets/img/10_sota-copas.jpg";
        break;
      case 11:
        card.src = "assets/img/11_caballo-copas.jpg";
        break;
      case 12:
        card.src = "assets/img/12_rey-copas.jpg";
        break;
      default:
        card.src = "assets/img/back.jpg";
        break;
    }
  } else {
    console.log("algo va mal");
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
      const randomNum = getRandomNum(); 
      const value = getValueHandler(randomNum); 
      puntuationBoundHandler(value); 
      showPuntuation(puntuationBound); 
      gameOver(puntuationBound); 
      getCardHandler(randomNum); 
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
      gameOver(0);
      getCardHandler(0);
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
  if (gameOverScreen instanceof HTMLParagraphElement && puntuacion > 7.5) {
    gameOverScreen.classList.add("active");
  } else {
    gameOverScreen.classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  hitMeHandler();
  standHandler();
  resetHandler();
});
