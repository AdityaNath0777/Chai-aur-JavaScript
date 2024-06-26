const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');

// always start with, to avoid any confusion
// setInterval( function(){}, 1000)

setInterval(function(){
    let date = new Date();
    date = date.toLocaleTimeString();

    // console.log(date);

    clock.innerHTML = `<span>${date}</span>`;
}, 1000); // args -> callBack fn, time in mili seconds