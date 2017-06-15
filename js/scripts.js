// DOM

var button = document.getElementsByClassName('button');
var elemsAmount = button.length;

for (var b = 0 ; b < elemsAmount ; b++) {
	alert(button[b].innerText);
}

// Events

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var newListItem = document.createElement('li'),
	    nextListItem = document.getElementsByTagName('li');
    
    newListItem.innerHTML = 'item ' + nextListItem.length;
    list.appendChild(newListItem);    
});

