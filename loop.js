const main = document.querySelector('main');

let htmlString = "";


for (let i = 0; i<10; ++i)
  {
    htmlString += `<div>${i}</div>`;
  }

main.innerHTML = htmlString;

