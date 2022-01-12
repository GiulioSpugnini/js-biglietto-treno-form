console.log('JS ok!');
const nameElement = document.getElementById("name");

const travelElement = document.getElementById("travel");

const ageElement = document.getElementById("age");

// #Calcolare il prezzo per chilometro
const ticketPrice = 0.21 * travelElement;
let userDiscount;
let finalPrice;
// 3b. Applicare sconto 20% per i minorenni
if (ageElement.value === 'Minorenne') {
    userDiscount = (ticketPrice * 0.20).toFixed(2);

    finalPrice = (ticketPrice - userDiscount).toFixed(2);

    console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);


} else if (ageElement.value === 'Maggiorenne') {
    userDiscount = (ticketPrice * 0.40).toFixed(2);
    console.log('Lo sconto per il passeggero è stato di: ', userDiscount);
    finalPrice = (ticketPrice - userDiscount).toFixed(2);

    console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);

} else {
    ageElement.value === 'Altro';
    userDiscount = 0;
    finalPrice = ticketPrice;
    console.log('Lo sconto per il passeggero è stato di: 0');
    console.log('Il prezzo del biglietto è: ', ticketPrice);
}

const generate = document.getElementById("generate");
const cancel = document.getElementById("cancel");

generate.addEventListener('click', function() {
    const inputName = nameElement.value;
    const inputTravel = travelElement.value;
    const inuputAge = ageElement.value;
    console.log(inputName, inputTravel, inuputAge);
})