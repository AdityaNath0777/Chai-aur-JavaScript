// converting HTMLCollection into Array
// as htmlCollection we can't use forEach
// const btn = Array.from(document.getElementsByClassName('button'))

    // querySelector returns -> NodeList
    // NodeList has forEach property
const btn = document.querySelectorAll( '.button')

const body = document.querySelector('body')
// const body = document.body; // also valid

btn.forEach((button, index) => {
    // console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e); // PointerEvent
        console.log(e.target); // returns HTML element
        console.log(e.target.id);
        // console.log(e.target.parentElement);
        // console.log(e.target.nextElementSibling);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }


    })
})