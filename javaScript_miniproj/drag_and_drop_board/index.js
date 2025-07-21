const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for (const card of cards) {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
}
for (const list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
}
function dragStart(e) {
  e.dataTransfer.setData('text/plain', this.id);
}
function dragEnd() {
  console.log('drag end');
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter() {
  e.preventDefault();
  this.classList.add('over');
}
