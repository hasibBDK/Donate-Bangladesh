function gettextElementvalueById(id){
    const elementText = document.getElementById(id).innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}



