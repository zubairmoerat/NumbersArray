let numbers = [12, 18, 11, 5, 8, 2];
//console.table(numbers)
let btnSubmit = document.querySelector('[data-submit]')
function displayMidNum(N) {
    let output = document.querySelector('[data-output]')
    switch (N){
        case numbers:
        output.innerText = displayMidNum(N[2]);
        output.innerText = displayMidNum(N[3]);
        break;
        default:
        output.innerText = `My code is broken`;
        break;
    }
    btnSubmit.addEventListener('click',displayMidNum)
}
