//Get values from user
    
function getValues(){
    let loanAmount = document.getElementById("loanAmount").value;
    let termMonths = document.getElementById("termMonths").value;
    let interestRate = document.getElementById("interestRate").value;

    loanAmount = parseInt(loanAmount);
    termMonths = parseInt(termMonths);
    interestRate = parseInt(interestRate);

    if (Number.isInteger(loanAmount) && Number.isInteger(termMonths) && Number.isInteger(interestRate)){

        let paymentArray = loanCalc(loanAmount, termMonths, interestRate);

        displayData(paymentArray);
    }
    else{
        alert("You must enter numbers");
    }

}
//Make the calculations

function loanCalc(loanAmount, termMonths, interestRate){
    
    let balanceArray = [];
    let monthlyInterest = [];
    let principalArray = [];

    //Calculate monthly payment 
    let totalmonthlyPayment = (loanAmount) * (interestRate / 1200) / (1 - Math.pow((1 + interestRate / 1200), -termMonths));

    //Calculate principal and interest
    //Subtract principal from remaining balance

    let remainingBalance = loanAmount;

    for (let i = 1; i <= termMonths; i++){

        let interest = remainingBalance * (interestRate/1200);

        let principalPayment = totalmonthlyPayment - interest;

        remainingBalance = remainingBalance - principalPayment;

        balanceArray.push(remainingBalance);

        monthlyInterest.push(interest);


    }
    return balanceArray;
    return monthlyInterest;
    return principalArray;
}


//Display results to user
function displayData(paymentArray){

    let tableBody = document.getElementById("amortResults");

    let templateRow = document.getElementById("lcTemplate");

    tableBody.innerHTML = "";

    for (let index = 0; index < payment.length; index+= 5) {

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(paymentArray[index]);
        rowCols[0].textContent = paymentArray[index];

        rowCols[1].classList.add(paymentArray[index + 1]);
        rowCols[1].textContent = paymentArray[index + 1];

        rowCols[2].classList.add(paymentArray[index + 2]);
        rowCols[2].textContent = paymentArray[index + 2];

        rowCols[3].classList.add(paymentArray[index + 3]);
        rowCols[3].textContent = paymentArray[index + 3];

        rowCols[4].classList.add(paymentArray[index + 4]);
        rowCols[4].textContent = paymentArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}

