let btn = document.querySelector('.ru');
let rules = document.querySelector('.rules');
let close = document.querySelector('[alt=close]');

btn.addEventListener('click', () => {
  rules.classList.add('active');
});
close.addEventListener('click', () => {
  rules.classList.remove('active');
});



const picks = document.querySelectorAll('.game .img');
const game = document.querySelector('.game');
const win_container = document.querySelector('.winb');
const score = document.querySelector('.score');
const winBord = document.querySelectorAll('.win .img');
const w = document.querySelector('.winner h2');
const reset = document.querySelector('.reset');
let myPick = '';
let myPickAlt = '';
let winner = '';
if (window.localStorage.score) {
  score.textContent = localStorage.score;
}
picks.forEach((pick) => {
  pick.addEventListener('click', function() {
    myPick = this.children[0].src;
    myPickAlt = this.children[0].alt;
    mPick();
    comPick();
    winRules(winBord[0], winBord[1]);
    if (winner == 'w') {
      score.textContent++;
      window.localStorage.score = score.textContent;
      w.textContent = 'YOU WIN';
      winBord[0].classList.add('active');
    }
    else if (winner == 'l') {
      w.textContent = 'YOU LOSE';
      winBord[1].classList.add('active');
    }
    else {
      w.textContent = 'DRAW';
    }
    play_agin();
  });
});
score.onclick = function() {
  this.textContent = 0;
  window.localStorage.score = 0;
};

function mPick() {
  console.log(myPickAlt)
  game.style.display = 'none';
  win_container.style.display = 'block';
  winBord[0].children[0].src = myPick;
  winBord[0].classList.add(myPickAlt);
}
let rr = '';

function comPick() {
  let imgs = [],
    r = Math.floor(Math.random() * 3);
  picks.forEach((img) => {
    let obj = {
      src: img.children[0].src,
      alt: img.children[0].alt
    }
    imgs.push(obj);
  });
  rr = r;
  winBord[1].children[0].src = imgs[rr].src;
  winBord[1].classList.add(imgs[rr].alt);
}

function winRules(p1, p2) {
  // p1
  if (p1.classList.contains('paper') && p2.classList.contains('rock')) {
    winner = 'w';
  }
  else if (p1.classList.contains('rock') && p2.classList.contains('scissors')) {
    winner = 'w';
  }
  else if (p1.classList.contains('scissors') && p2.classList.contains('paper')) {
    winner = 'w';
  }
  // p2
  else if (p2.classList.contains('paper') && p1.classList.contains('rock')) {
    winner = 'l';
  }
  else if (p2.classList.contains('rock') && p1.classList.contains('scissors')) {
    winner = 'l';
  }
  else if (p2.classList.contains('scissors') && p1.classList.contains('paper')) {
    winner = 'l';
  } else {
    winner = 'd';
  }
}

function play_agin() {
  reset.addEventListener('click', () => {
    winBord[0].classList = 'img';
    winBord[1].classList = 'img ';
    myPick = '';
    myPickAlt = '';
    winner = '';
    game.style.display = 'block';
    win_container.style.display = 'none';
  })
}