var shelf = document.getElementById("shelf"); 

const addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener('submit', function(x) {
    x.preventDefault();
    const value = addBookForm.querySelector('input[type="text"]').value; 
    console.log(value);
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');

    li.appendChild(bookName);
    li.appendChild(deleteButton);

    shelf.appendChild(li);
    bookName.textContent = value;
    deleteButton.textContent = "Delete"; 
    bookName.classList.add('name');
    deleteButton.classList.add("delete");
});



//  DELETE A BOOK  //
shelf.addEventListener("click", function(e) {
  var target = e.target;
  if(target.className == "delete") {
  	const li = target.parentElement;
  	shelf.removeChild(li); }
});



const searchBox = document.forms['searchBox'].querySelector('input');
searchBox.addEventListener('keyup', function(e) {
	const term = e.target.value.toLowerCase();
	const books = shelf.getElementsByTagName('li');

	Array.from(books).forEach(function(book) {
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1) {
			book.style.display = "block"; }
		else {
			book.style.display = "none"; }
	})
})


const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if(hideBox.checked) {
		shelf.style.display = "none"; }
	else {
		shelf.style.display = "block"; 
	}
});

// var todos = ['first', 'second', 'third'];

// function addToDo(todo) {
// 	todos.push(todo);
// 	displayToDos(); }

// function changeToDo(position, newValue) {
// 	todos[position] = newValue;
// 	displayToDos(); }

// function deleteToDo(position) {
// 	todos.splice(position, 1);
// 	displayToDos(); }

// function displayToDos() {
// 	console.log(todos); }