document.getElementById('discountButton').addEventListener('click', function(){
    const withoutDiscount = document.getElementById('withoutDiscount');
    const withoutDiscountField = parseFloat(withoutDiscount.innerText);
    withoutDiscount.innerText = withoutDiscountField - (withoutDiscountField*30)/100;
});