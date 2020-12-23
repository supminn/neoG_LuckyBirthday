//Initializing variables to fetch data
const dob = document.querySelector("#date-dob");
const numLucky = document.querySelector("#num-luck");
const btnCheck = document.querySelector("#btn-check");
const txtResult = document.querySelector("#txt-result");
const btnReset = document.querySelector("#btn-reset");

function isDobLucky() {
    //Initializing block variables
    let dobSum = 0;
    let dobDigits = [];
    //Checking date validity
    if (dob.value == "") {
        txtResult.innerText = "Enter a valid date!"
    } else if (numLucky.value == "") {
        txtResult.innerText = "Please provide a lucky number."
    } else {
        //Split DoB into date, month and year - array
        let dobArr = dob.value.split("-");
        //Split them further into 3 arrays with digits
        dobArr.map(val => {
            dobDigits.push(val.split(""));
        });
        //Iterate over digits and sum the DoB digits
        dobDigits.map(vals => {
            vals.map(num => dobSum += parseInt(num));
        });
        //Check if it is divisible by lucky number
        if (dobSum % parseInt(numLucky.value) == 0) {
            txtResult.innerText = "Congratulations! You're birthday is lucky 😁"
        } else {
            txtResult.innerText = `You're birthday missed to be lucky by ${dobSum % parseInt(numLucky.value)} days 🙁`
        }
    }
}

//Check lucky birthday
btnCheck.addEventListener('click', isDobLucky);
//Reset the data
btnReset.addEventListener('click', function () {
    txtResult.innerText = "";
})