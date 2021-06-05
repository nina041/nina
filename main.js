
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('inputNama');

const buatLi = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    buatLi(input.value);
    input.value = '';
});

let itemArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

localStorage.setItem('item', JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('item'));


data.forEach((item) => {
    buatLi(item);
});


button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
});

