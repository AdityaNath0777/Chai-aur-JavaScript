// let randomNum = 414141;

// const randomHex = function () {
//   return parseInt(Math.random() * 1000000);
// };

const randomHex = () => {
    let HEX = '0123456789ABCDEF';
    let color = '#';
  
    for (let k = 0; k < 6; ++k) {
      color += HEX[Math.floor(Math.random() * 16)];
    }
  
    console.log(color);
  
    return color;
  };
  
  let intervalRef;
  
  const ultdColor = () => {
    // edge case, optimisation
    if (!intervalRef) {
      intervalRef = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      let randomNum = randomHex();
      document.body.style.backgroundColor = randomNum;
      document.querySelector(
        '#colorCode'
      ).innerHTML = `<br /> <button id="hexColorCode">${randomNum}</button>`;
    }
  };
  
  const stopColorChange = () => {
    clearInterval(intervalRef);
  
    // optimisation
    intervalRef = null;
  };
  
  document.querySelector('#start').addEventListener('click', ultdColor, false);
  
  document
    .querySelector('#stop')
    .addEventListener('click', stopColorChange, false);
  