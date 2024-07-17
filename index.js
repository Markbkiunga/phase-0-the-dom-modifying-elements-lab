// Write your code here!
document.getElementById('main').remove();
let newHeader = document.querySelector('h1');

newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Mark is the champion';
