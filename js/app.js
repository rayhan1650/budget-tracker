const foodInput=document.getElementById('food');
const rentInput=document.getElementById('rent');
const clothesInput=document.getElementById('clothes');

// expenses function 
function totalExpense(){
    const foodInputValue=parseInt(foodInput.value); 
    const rentInputValue=parseInt(rentInput.value); 
    const clothesInputValue=parseInt(clothesInput.value);
    return foodInputValue+rentInputValue+clothesInputValue;
}

// calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const totalExp=totalExpense();
    const setTotalExpense=document.getElementById('total-expenses');
    setTotalExpense.innerText=totalExp;
});