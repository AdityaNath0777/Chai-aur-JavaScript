const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    // by default it sends the value of this form to server
    // when someone clicked on "submit"
    e.preventDefault(); // prevents this action

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.getElementById('results');
    // let result = document.querySelector('#results'); // also valid

    // to prevent from edge cases
    if (height <= 0 || height === '' || isNaN(height)) {
        result.innerHTML = `please enter valid height. You've entered ${height}`;
    } else if (weight <= 0 || weight === '' || isNaN(weight)) {
        result.innerHTML = `please enter valid weight. You've entered ${weight}`;
    } else {
        let bmi = (weight / (height * height)) * 10000;

        let bmiResult = bmiRange(bmi);

        result.innerHTML = `<span style="color: white">${bmi}</span> <p>and you comes in ${bmiResult} category</p>`;
    }


})

function bmiRange(bmi) {
    if (bmi < 18.6)
        return 'under weight';
    else if (bmi >= 18.6 && bmi <= 24.9)
        return 'normal';
    else return 'over weight';
}