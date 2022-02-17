const foodInput=document.getElementById('food');
const rentInput=document.getElementById('rent');
const clothesInput=document.getElementById('clothes');
const incomeInput=document.getElementById('income');

// expenses function 
function totalExpense(){
    const foodInputValue=parseInt(foodInput.value); 
    const rentInputValue=parseInt(rentInput.value); 
    const clothesInputValue=parseInt(clothesInput.value);
    const totalExp= foodInputValue+rentInputValue+clothesInputValue;
    const setTotalExpense=document.getElementById('total-expenses');
    setTotalExpense.innerText=totalExp;
    calculateBalance(totalExp);
}

//balance calculation
function calculateBalance(totalExp){ 
    const incomeInputValue=parseInt(incomeInput.value);
    const balance= incomeInputValue-totalExp;
    const setBalance=document.getElementById('balance');
    setBalance.innerText=balance;
}

//saving calculation
function calculateSaving(){
    const incomeInputValue=parseInt(incomeInput.value);
    const saveInput=document.getElementById('save');
    const saveInputValue=parseInt(saveInput.value);
    const savingAmount=incomeInputValue*(saveInputValue/100);
    const setSavingAmount=document.getElementById('saving-amount');
    setSavingAmount.innerText=savingAmount;
}

// calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    totalExpense();   
});

// savings buttons
document.getElementById('btn-saving').addEventListener('click',function(){
    calculateSaving();
    
});
