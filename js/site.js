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

function loanCalc(){




    
}
//Make calculations

//Display results to user


