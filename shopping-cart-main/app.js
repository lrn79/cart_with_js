function updatePruductNumber(pruduct, price, isincresing) {
    const pruductInput = document.getElementById(pruduct + '_number');
    let pruductNumber = pruductInput.value;
    if (isincresing == true) {
        pruductNumber = parseInt(pruductNumber) + 1;
    }
    else if (pruductNumber > 0) {
        pruductNumber = parseInt(pruductNumber) - 1;
    };
    pruductInput.value = pruductNumber;

    // update case total
    const pruductTotal = document.getElementById(pruduct + '_total');
    pruductTotal.innerText = pruductNumber * price;

    // calculateTotal 
    calculateTotal();
};
//calculate total
function getInputValue(pruduct) {
    const pruductInput = document.getElementById(pruduct + '_number');
    pruductNumber = pruductInput.value;
    return pruductNumber;
}

function calculateTotal() {

    let phoneTotal = getInputValue('phone') * 1000;
    let caseTotal = getInputValue('case') * 50;
    let subtotal = phoneTotal + caseTotal;
    let tax = subtotal / 2;
    let totalPrice = subtotal + tax;
    //update on the html
    document.getElementById('sub_total').innerText = subtotal;
    document.getElementById('tax_total').innerText = tax;
    document.getElementById('total_price').innerText = totalPrice;
}

// phone  event

document.getElementById('phone_plus').addEventListener('click', function () {
    updatePruductNumber('phone', 1000, true);
});
document.getElementById('phone_minus').addEventListener('click', function () {
    updatePruductNumber('phone', 1000, false);
});




// handle  event

document.getElementById('case_plus').addEventListener('click', function () {
    updatePruductNumber('case', 50, true);
});
document.getElementById('case_minus').addEventListener('click', function () {
    updatePruductNumber('case', 50, false);

});

