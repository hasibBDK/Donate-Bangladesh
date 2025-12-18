function gettextElementvalueById(id){
    const elementText = document.getElementById(id).innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}

function addToHistory(title, amount) {
    const historyContainer = document.getElementById('transiction-container');

    const div = document.createElement('div');
    div.classList.add('border', 'p-3', 'mb-2', 'rounded');

    const date = new Date().toLocaleString();

    div.innerHTML = `
        <p><strong>${title}</strong></p>
        <p>Amount: ${amount} BDT</p>
        <p class="text-sm text-gray-500">${date}</p>
    `;

    historyContainer.appendChild(div);
}


