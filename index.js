const billAmount = document.querySelector("#bill-amount");
const checkBtn = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-msg");

const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkBtn.addEventListener("click",function validateBillAndCashgiven()
{
    errorMessage.style.display = "none";
    if(Number(cashGiven.value) <0 || Number(billAmount.value) <0)
    {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Invalid Number";
    }
    else if(Number(billAmount.value) > 0)
    {
         if (Number(cashGiven.value) > Number(billAmount.value))
        {
            errorMessage.style.display = "block";
            errorMessage.innerText = "Here is your change!";
            const amountTobeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountTobeReturned); 
        }
        else if((cashGiven.value) = (billAmount.value))
        {
            errorMessage.style.display = "block";
            errorMessage.innerText = "I think this app wasn't needed ♫" 
        }
        else
        {
            errorMessage.style.display = "block";
            errorMessage.innerText = "You still have to pay the rest";
        }
    }
    else
    {
        errorMessage.style.display = "block";
        errorMessage.innerText = "The bill amount is invalid" 
    }
})

function calculateChange(amountTobeReturned)
{for (let i = 0; i < availableNotes.length; i++) 
    {
        const numberOfNotes = Math.trunc(amountTobeReturned/availableNotes[i]);
        amountTobeReturned = amountTobeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}