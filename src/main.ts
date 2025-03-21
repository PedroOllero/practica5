let randomNum: number = 0;
let puntuationBound: number = 0;
const setPuntuationBound = (value: number): number => {
  return (puntuationBound = value);
};

const getRandomNum = (): number => Math.floor(Math.random() * 10) + 1;

const addTwo = (num: number): number => (num > 7 ? num + 2 : num);

const getValueHandler = (points: number): number => {
  if (points > 7) {
    return (points = 0.5);
  } else {
    return points;
  }
};

const getCardImage = (puntuacion?: string): string => {
  switch (puntuacion) {
    case "0":
      return "assets/img/back.jpg";
    case "1":
      return "assets/img/1_as-copas.jpg";
    case "2":
      return "assets/img/2_dos-copas.jpg";
    case "3":
      return "assets/img/3_tres-copas.jpg";
    case "4":
      return "assets/img/4_cuatro-copas.jpg";
    case "5":
      return "assets/img/5_cinco-copas.jpg";
    case "6":
      return "assets/img/6_seis-copas.jpg";
    case "7":
      return "assets/img/7_siete-copas.jpg";
    case "10":
      return "assets/img/10_sota-copas.jpg";
    case "11":
      return "assets/img/11_caballo-copas.jpg";
    case "12":
      return "assets/img/12_rey-copas.jpg";
    default:
      return "assets/img/back.jpg";
  }
};

const paintCard = (puntuacion?: string): void => {
  const cardImage = getCardImage(puntuacion);
  const card = document.getElementById("carta");
  if (card && card instanceof HTMLImageElement) {
    card.src = cardImage;
  }
};

const commentTransition = (activo: boolean) => {
  const comment = document.querySelector(".comentario");
  if (comment && comment instanceof HTMLParagraphElement) {
    if (activo) {
      comment.classList.add("active");
    } else {
      comment.classList.remove("active");
    }
  }
};

const gameHandler = (puntuation: number) => {
  const comment = document.querySelector(".comentario");
  commentTransition(true);
  if (comment && comment instanceof HTMLParagraphElement) {
    if (puntuation < 4 && puntuation > 0) {
      comment.textContent = "Has sido muy conservador";
    } else if (puntuation >= 5 && puntuation <= 7.5) {
      switch (puntuation) {
        case 5:
          comment.textContent = "Te ha entrado el canguelo eh";
          break;
        case 5.5:
          comment.textContent = "Te ha entrado el canguelo eh";
          break;
        case 6:
          comment.textContent = "Casi casi...";
          break;
        case 6.5:
          comment.textContent = "Casi casi...";
          break;
        case 7:
          comment.textContent = "Casi casi...";
          break;
        case 7.5:
          comment.textContent = "¡Lo has clavado!";
          break;
        default:
      }
    } else {
      commentTransition(false);
    }
  }
};

const puntuationBoundHandler = (newNumber: number): number => {
  const updatedPuntuationBound = puntuationBound + newNumber;
  setPuntuationBound(updatedPuntuationBound);
  return updatedPuntuationBound;
};

const hitMeHandler = () => {
  const randomNum: number = getRandomNum();
  const cartNumb: number = addTwo(randomNum);
  const value: number = getValueHandler(cartNumb);
  puntuationBoundHandler(value);
  showPuntuation(puntuationBound);
  gameOver(puntuationBound);
  paintCard(cartNumb.toString());
};

const hitMeButtonHandler = () => {
  const hitMeButton = document.getElementById("pedir");
  if (hitMeButton && hitMeButton instanceof HTMLButtonElement) {
    hitMeButton.addEventListener("click", () => {
      hitMeHandler();
    });
  }
};

const standHandler = () => {
  gameHandler(puntuationBound)
};

const standButtonHandler = () => {
  const standButton = document.getElementById("plantar");
  if (standButton && standButton instanceof HTMLButtonElement) {
    standButton.addEventListener("click", () => {
      standHandler();
    });
  }
};

const resetHandler = () => {
  setPuntuationBound(0);
  showPuntuation(puntuationBound);
  gameOver(0);
  paintCard("0");
  gameHandler(0);
}

const resetButtonHandler = () => {
  let resetButton = document.getElementById("reset");
  if (resetButton && resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => {
      resetHandler();
    });
  }
};

const showPuntuation = (impressPuntuation: number) => {
  let impressPuntuationString: string = impressPuntuation.toString();

  let showPuntuationScreen = document.getElementById("puntuacion__numero");

  if (showPuntuationScreen && showPuntuationScreen instanceof HTMLElement) {
    showPuntuationScreen.textContent = impressPuntuationString;
  }
};

const gameOver = (puntuacion: number) => {
  const gameOverScreen = document.querySelector(".gameover")!;
  if (
    gameOverScreen &&
    gameOverScreen instanceof HTMLParagraphElement &&
    puntuacion > 7.5
  ) {
    gameOverScreen.classList.add("active");
  } else {
    gameOverScreen.classList.remove("active");
  }
};

const buttonsHandler = () => {
  hitMeButtonHandler();
  standButtonHandler();
  resetButtonHandler();
};

document.addEventListener("DOMContentLoaded", () => {
  buttonsHandler();
});
