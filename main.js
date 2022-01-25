const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let data_final = '01/27/2022'

let count_down = new Date('01/25/2022 12:35:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);

  if (diff < 1000) {
    window.location.href = "https://dev.kickoff2022.teltecsolutions.com.br/live"
  }
}

function resetCountdown() {
  clearInterval(x);
  let date_end = data_final;
  count_down = new Date(`${date_end} 09:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}
