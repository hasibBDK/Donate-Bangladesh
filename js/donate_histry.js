document.getElementById('show-transiction-histry').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('show-transiction-histry').style.backgroundColor = 'greenyellow';
    document.getElementById('donation').style.backgroundColor = 'white';
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('transiction-container').classList.remove('hidden');
    console.log('clicked');
    
});
document.getElementById('donation').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('show-transiction-histry').style.backgroundColor = 'white';
    document.getElementById('donation').style.backgroundColor = 'greenyellow';


    document.getElementById('transiction-container').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
    console.log('clicked');


});