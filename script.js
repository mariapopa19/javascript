var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var li = document.getElementsByTagName("li");
var buttonDelete = document.querySelectorAll("li button")

//--------------
// Add .done class
function liEvent(){
	for(var i=0; i<li.length; i++){
		li[i].addEventListener('click', changeClass)
	}
}

function changeClass(){
	this.classList.toggle('done');
}

//----------------
// Add delete buttons
function deleteListItem() {
	for(var i = 0; i < li.length; i++)
		this.parentNode.remove();
}

function liButton() {
	for(var i = 0; i < buttonDelete.length; i++)
		buttonDelete[i].addEventListener('click', deleteListItem)
}


//----------------------
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	liEvent();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}


liEvent();
liButton();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
