const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const color = document.querySelector('h2');

btn.addEventListener('click', () => {
  let randomize = Math.floor(Math.random() * 1677715).toString(16);
  body.style.backgroundColor = '#' + randomize;
  color.innerHTML = "Current color is #" + randomize;
  }
);