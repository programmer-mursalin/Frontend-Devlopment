const button1 = document.getElementById('btn');
const inp1 = document.getElementById('name1');
const inp2 = document.getElementById('name2');
const lt = document.getElementById('url1');
let items = JSON.parse(localStorage.getItem('items')) || [];

// প্রথমে পুরোনো লিস্ট দেখাবে
update_list();

button1.addEventListener('click', function () {
  let desc1 = inp1.value.trim();
  let link = inp2.value.trim();

  if (desc1 === '' || link === '') return; // খালি হলে কিছু হবে না

  items.push({
    description: desc1,
    url: link,
  });

  localStorage.setItem('items', JSON.stringify(items));
  update_list();

  inp1.value = '';
  inp2.value = '';
});

function update_list() {
  lt.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.description;
    a.target = '_blank';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function () {
      items.splice(index, 1); // অ্যারে থেকে মুছে ফেলবে
      localStorage.setItem('items', JSON.stringify(items));
      update_list();
    });

    li.appendChild(a);
    li.appendChild(removeBtn);
    lt.appendChild(li);
  });
}
