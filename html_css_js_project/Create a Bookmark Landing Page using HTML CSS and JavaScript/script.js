const inptfrm = document.querySelector('.inp');
const sv1 = document.querySelector('.sv');

// LocalStorage থেকে আগের ডেটা load করা
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// render করার function
function renderTasks() {
  sv1.innerHTML = '';
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('bk');
    div.innerHTML = `<span class="pr">${task}</span> <button class="dlt" data-id="${index}">Delete</button>`;
    sv1.appendChild(div);
  });
}

// delete button handle করা
sv1.addEventListener('click', (e) => {
  if (e.target.classList.contains('dlt')) {
    const id = e.target.dataset.id;
    tasks.splice(id, 1); // remove from array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // update localStorage
    renderTasks(); // refresh UI
  }
});

// Enter key handle করা
inptfrm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.value.trim() !== '') {
    tasks.push(e.target.value); // array-এ add
    localStorage.setItem('tasks', JSON.stringify(tasks)); // save localStorage
    inptfrm.value = ''; // input clear
    renderTasks(); // UI refresh
    e.preventDefault();
  }
});

// page load হলে render
renderTasks();
