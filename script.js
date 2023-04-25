const timestamp = document.querySelector(".timestamp");
const dateTo = new Date("2023", "7", "28");

function tick() {
  const diff = getDateDiff();
  const formated = getFormatedDate(diff);
  
  timestamp.innerHTML = formated;
}

function getDateDiff() {
  const dateCurrent = new Date();
  return dateTo - dateCurrent;
}

function getFormatedDate(ms) {
  const days = Math.floor(ms / (24*60*60*1000));
  const daysms = ms % (24*60*60*1000);
  const hours = Math.floor(daysms / (60*60*1000));
  const hoursms = ms % (60*60*1000);
  const minutes = Math.floor(hoursms / (60*1000));
  const minutesms = ms % (60*1000);
  const sec = Math.floor(minutesms / 1000);
  return `
    <div>
      <span>Дней: ${days}</span>
      <span>Часов: ${hours}</span>
      <span>Минут: ${minutes}</span>
      <span>Секунд: ${sec}</span>
    </div>
  `;
}

setInterval(tick, 1000);
