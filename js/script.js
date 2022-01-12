console.log('JS ok!');
const nameElement = document.getElementById("name");

const travelElement = document.getElementById("travel");

const ageElement = document.getElementById("age");

//#Buttons constant
const generate = document.getElementById("generate");
const cancel = document.getElementById("cancel");
//#Results constant
const nameResult = document.getElementById("nameResult");
const discount = document.getElementById("discount");
const cabin = document.getElementById("cabin");
const codeCP = document.getElementById("codeCP");
const price = document.getElementById("price");

generate.addEventListener('click', function() {
    //!VALIDATE
    if (!isNaN(nameElement.value) || travelElement.value < 0) {
        alert("DEVI COMPILARE CORRETTAMENTE GLI SPAZI");
        window.location.reload();
    } else {
        // #Calcolare il prezzo per chilometro
        const ticketPrice = 0.21 * travelElement.value;
        let userDiscount;
        let discountType;
        let finalPrice;
        // 3b. Applicare sconto 20% per i minorenni
        if (ageElement.value === 'Minorenne') {
            userDiscount = (ticketPrice * 0.20).toFixed(2);
            discountType = 'Biglietto Sconto Minorenne';
            finalPrice = (ticketPrice - userDiscount).toFixed(2);

            console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);


        } else if (ageElement.value === 'Over65') {
            userDiscount = (ticketPrice * 0.40).toFixed(2);
            discountType = 'Biglietto Sconto Over65';

            console.log('Lo sconto per il passeggero è stato di: ', userDiscount);
            finalPrice = (ticketPrice - userDiscount).toFixed(2);

            console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);

        } else {
            ageElement.value === 'Altro';
            userDiscount = 0;
            discountType = 'Biglietto Standard';

            finalPrice = ticketPrice;
            console.log('Lo sconto per il passeggero è stato di: 0');
            console.log('Il prezzo del biglietto è: ', ticketPrice);
        }
        let inputName = nameElement.value;
        let inputTravel = travelElement.value;
        const inuputAge = ageElement.value;
        console.log(inputName, inputTravel, inuputAge);
        //#RESULTS
        nameResult.innerHTML = `<h6 class="fw-bolder">${nameElement.value}</h6>`;
        discount.innerHTML = `<h6>${discountType}</h6>`;
        cabin.innerHTML = `<h6>${Math.floor(Math.random() * 12) + 1}</h6>`;
        codeCP.innerHTML = `<h6>${Math.floor(Math.random() * 10000) + 1}</h6>`;
        price.innerHTML = `<h6>${finalPrice} €</h6>`;

    }
})

cancel.addEventListener('click', function() {
    window.location.reload();
})