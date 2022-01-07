var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delectBtn = document.createElement("button"); 
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delectBtn);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delectBtn.classList.add("delect");
	delectBtn.innerHTML='Del';	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTasks(e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('done');
	}
}

function deleteTasks(e) {
	if (e.target.className === 'delect') {
		e.target.parentElement.remove();
	}
}

function handleUIClick (e) {
	doneTasks(e);
	deleteTasks(e);
}


ul.addEventListener('click', handleUIClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
