const foodInput=document.getElementById('food');
const rentInput=document.getElementById('rent');
const clothesInput=document.getElementById('clothes');
const incomeInput=document.getElementById('income');

// expenses function 
function totalExpense(){
    const foodInputValue=parseInt(foodInput.value); 
    const rentInputValue=parseInt(rentInput.value); 
    const clothesInputValue=parseInt(clothesInput.value);
    return foodInputValue+rentInputValue+clothesInputValue;
}

//balance calculation
function calculateBalance(totalExp){
    const incomeInputValue=parseInt(incomeInput.value);
    return incomeInputValue-totalExp;
}

// calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const totalExp=totalExpense();
    const setTotalExpense=document.getElementById('total-expenses');
    setTotalExpense.innerText=totalExp;
    const balance=calculateBalance(totalExp);
    const setBalance=document.getElementById('balance');
    setBalance.innerText=balance;
});