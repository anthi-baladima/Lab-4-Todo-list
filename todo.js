//btnClear points to the #clear-button element in the DOM
const btnClear = document.querySelector('#clear-button');

//Adding and event listener: btnClear will react on the click event
//When the btnClear is clicked, then the callback fuction 
//(the 2nd argument of the event listener) will be called. 


const newItem= document.querySelector("#new-item");
const todoList=document.querySelector('#todo-list');

//Κανένα από αυτά δεν θα χρειαστεί redeclare ή update, άρα η const ταιριάζει

newItem.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const a=document.createElement('li');
        a.textContent=newItem.value;
        a.addEventListener("click", function() {
            a.classList.toggle('completed');
        });
        a.addEventListener("dblclick", function() {
            todoList.removeChild(a);
        });
        todoList.appendChild(a);
    }
});


btnClear.addEventListener("click", function() {
    todoList.innerHTML='';
});
