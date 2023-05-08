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

const Todos = async () => {
	const response = await fetch ('eunice.json')
	if (response.status !== 200){
		throw new Error('this is an error response');
	}
	const data = await response.json()
	return data;
}

Todos()
.then((data) => console.log('Resolved:', data))
.catch((err) => console.log('Rejected:', err.message));

// fetch('eunice.json').then((response) => {
// 	console.log('resolved',response)
// 	return response.json();
// }).then((data) => {
// 	console.log('data',data)
// }).catch((err) => {
// 	console.log('err',err)
// })





// const Todos = (resource) => {
// 	return new Promise((resolve, reject) => {

// 		const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
// 	if (request.readyState === 4 && request.status === 200) {
// 		const data = JSON.parse(request.responseText);
// 		resolve(data);
// 	} else if(request.readyState === 4){
// 		reject('error getting you message');
// 	}
// })

// request.open('GET',resource);
// request.send();


// 	})
// }

// Todos('tiannah.json').then(data => {
// 	console.log('promise 1 resolved:', data);
// 	return Todos('eunice.json');
// }).then(data => {
// 	console.log('promise 2 resolved:', data);
// 	return Todos('prince.json');
// }).then(data => {
// 	console.log('promise 3 resolved:', data);
// }).catch(err =>{
// 	console.log('promise rejected:', err)
// })