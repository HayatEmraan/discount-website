document.getElementById('discountButton').addEventListener('click', function(){
    const withoutDiscount = document.getElementById('withoutDiscount');
    const withoutDiscountField = parseFloat(withoutDiscount.innerText);
    const discountField = document.getElementById('discountNumber');
    const discountFieldValue = discountField.value;
    if(discountFieldValue === 'DICS30'){
        withoutDiscount.innerText = withoutDiscountField - (withoutDiscountField*30)/100;
    }
});