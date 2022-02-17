const foodInput=document.getElementById('food');
const rentInput=document.getElementById('rent');
const clothesInput=document.getElementById('clothes');
const incomeInput=document.getElementById('income');
let balance=0;

// expenses function 
function totalExpense(){
    const foodInputValue=parseInt(foodInput.value); 
    const rentInputValue=parseInt(rentInput.value); 
    const clothesInputValue=parseInt(clothesInput.value);
    const incomeInputValue=parseInt(incomeInput.value);
    if(isNaN(foodInputValue)||isNaN(rentInputValue)||isNaN(clothesInputValue)||isNaN(incomeInputValue)){
        errorHandler('Please reload page & enter number value in all input fields');
    }
    else if(foodInputValue<0||rentInputValue<0||clothesInputValue<0||incomeInputValue<0){
        errorHandler('Please reload page & enter positive number value in all input fields');
    }
    else{
        const totalExp= foodInputValue+rentInputValue+clothesInputValue;
        const setTotalExpense=document.getElementById('total-expenses');
        setTotalExpense.innerText=totalExp;
        calculateBalance(totalExp);
    }
    
}

//balance calculation
function calculateBalance(totalExp){ 
    const incomeInputValue=parseInt(incomeInput.value);
    balance= incomeInputValue-totalExp;
    if(balance<0){
        errorHandler("Expense can't be greater than income.Please reload page & input again.");
    }
    else{
        const setBalance=document.getElementById('balance');
        setBalance.innerText=balance;
    }       
}
    


//saving calculation
function calculateSaving(){
    const incomeInputValue=parseInt(incomeInput.value);
    const saveInput=document.getElementById('save');
    const saveInputValue=parseInt(saveInput.value);
    if(isNaN(saveInputValue)||isNaN(incomeInputValue)){
        errorHandler("Please reload page & enter number value in all input fields.");
    }
    else if(saveInputValue<0){
        errorHandler("Please reload page & enter positive number value in all input fields.");
    }
    else{
        const savingAmount=parseInt(incomeInputValue*(saveInputValue/100));
        const setSavingAmount=document.getElementById('saving-amount');
        setSavingAmount.innerText=savingAmount;       
        remainingBalance(savingAmount);
    }
    
}

//remaining balance calculation
function remainingBalance(savingAmount){
    const remainBalance=balance-savingAmount;
    if(remainBalance<0){
        errorHandler("Saving can't be greater than balance.Please reload page & input saving again.");
    }
    else{       
        const setRemainingBalance=document.getElementById('remaining-balance');
        setRemainingBalance.innerText=remainBalance;
    }    
}

// calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const errorMessage=document.getElementById('error-message');
    errorMessage.style.display='none';
    totalExpense();   
});

// savings buttons
document.getElementById('btn-saving').addEventListener('click',function(){
    const errorMessage=document.getElementById('error-message');
    errorMessage.style.display='none';
    calculateSaving();   
});

//error handler
function errorHandler(message){
    const errorMessage=document.getElementById('error-message');
    errorMessage.innerText=message;
    errorMessage.style.display='block';
}
