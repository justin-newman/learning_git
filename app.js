alert('Welcom to Git!');

console.log('We are on a new branch!');

var firstName = 'Justin';
var lastName = 'Newman';

console.log('Full Name: ' + firstName + " " + lastName);

var age = 28;
if (age > 19)
    console.log('not a teen');
else
    console.log('are a teen');



var carButton = document.getElementById('get-car');
carButton.addEventListener('click', function() {
    var carInput = document.getElementById('car');
    console.log(carInput.value);
});