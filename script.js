let burgerButton = document.querySelector('.toggler');
let navBar = document.querySelector('#navbar');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('active')
});

let input = document.querySelector('.input-form');
let addButton = document.querySelector('.addButton');
let ul = document.querySelector('.ul-lists');
let form = document.querySelector('.form-wrapper');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let value = input.value;
    let li = document.createElement('li');
    li.classList.add('form-li');
    li.textContent = value ;
    input.value = '';

    let deleteButton = document.createElement('span');
    deleteButton.classList.add('remove-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        li.remove();
    })

    document.querySelector('.clear-list').addEventListener('click', function() {
        ul.innerHTML = '';
    })

    ul.appendChild(li);
    li.appendChild(deleteButton);
})

