document.getElementById('dontion-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const donationInput = document.getElementById('donation-amount').value;
    const donationAmount = parseFloat(donationInput);
    const mainBalance = gettextElementvalueById('main-balance');
    const amountDonated = gettextElementvalueById('amount-donated');
    if(donationAmount > mainBalance){
        alert('You do not have enough balance to make this donation.');
        return;
    }
    else if(donationAmount <= 0 || isNaN(donationAmount)){
        alert('Please enter a valid donation amount.');
        return;
    }
    else{
        const newMainBalance = mainBalance - donationAmount;
        const amountDonatedNew = amountDonated + donationAmount;
        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';
        document.getElementById('amount-donated').innerText = amountDonatedNew + ' BDT';

    }
    addToHistory('Flood Relief - Noakhali', donationAmount);
    
});



document.getElementById('dontion-btn-feni').addEventListener('click', function(event) {
    event.preventDefault();
    const donationInputfeni = document.getElementById('donation-amount-feni').value;
    const donationAmountfeni = parseFloat(donationInputfeni);
    const mainBalance = gettextElementvalueById('main-balance');
    const amountDonatedfeni = gettextElementvalueById('amount-donated-feni');
    if(donationAmountfeni > mainBalance){
        alert('You do not have enough balance to make this donation.');
        return;
    }
    else if(donationAmountfeni <= 0 || isNaN(donationAmountfeni)){
        alert('Please enter a valid donation amount.');
        return;
    }
    else{
        const newMainBalance = mainBalance - donationAmountfeni;
        const amountDonatedNewfeni = amountDonatedfeni + donationAmountfeni;
        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';
        document.getElementById('amount-donated-feni').innerText = amountDonatedNewfeni + ' BDT';

    }
    

    addToHistory('Flood Relief - Feni', donationAmountfeni);
});


document.getElementById('dontion-btn-movement').addEventListener('click', function(event) {
    event.preventDefault();
    const donationInputmovement = document.getElementById('donation-amount-movement').value;
    const donationAmountmovement = parseFloat(donationInputmovement);
    const mainBalance = gettextElementvalueById('main-balance');
    const amountDonatedmovement = gettextElementvalueById('amount-donated-movement');
    if(donationAmountmovement > mainBalance){
        alert('You do not have enough balance to make this donation.');
        return;
    }
    else if(donationAmountmovement <= 0 || isNaN(donationAmountmovement)){
        alert('Please enter a valid donation amount.');
        return;
    }
    else{
        const newMainBalance = mainBalance - donationAmountmovement;
        const amountDonatedNewmovement = amountDonatedmovement + donationAmountmovement;
        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';
        document.getElementById('amount-donated-movement').innerText = amountDonatedNewmovement + ' BDT';
    }
   addToHistory('Quota Movement Support', donationAmountmovement);

 });
