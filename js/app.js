const userScore = document.querySelector('.header__score__user');
const compScore = document.querySelector('.header__score__comp');
const winOrLose = document.querySelector('.text');
const userChoise = document.querySelectorAll('.choise');
const newGame = document.querySelector('.btn__new-game');

const arrCompChoise = ['s', 'c', 'p'];

userScore.textContent = 0;
compScore.textContent = 0;

userChoise.forEach((item) => {
   item.addEventListener('click', () => {
      const userMotion = item.dataset.choise;
      const compMotion = compChoise();
      winOrLose.textContent = '';
      const variant = compMotion + userMotion;

      switch (variant) {
         case 'ss':
         case 'cc':
         case 'pp':
            winOrLose.textContent = 'Нічия';
            break;

         case 'ps':
         case 'cp':
         case 'sc':
            userScore.textContent++;
            winOrLose.textContent = 'Сосать';
            break;
         case 'sp':
         case 'cs':
         case 'pc':
            compScore.textContent++;
            winOrLose.textContent = 'Соснув';
            break;
      }
   });
});

function compChoise() {
   return arrCompChoise[Math.floor(Math.random() * 3)];
}

newGame.addEventListener('click', () => {
   userScore.textContent = 0;
   userScore.textContent = 0;
});
