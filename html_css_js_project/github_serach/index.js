const api = 'https://api.github.com/users/';
const main = document.getElementById('main');
const inputform = document.getElementById('userInput');
const inputBox = document.getElementById('inputBox');

const userGetFunction = (username) => {
  fetch(api + username)
    .then((res) => res.json())
    .then((data) => {
      userCard(data);
      repoGetFunction(username);
    })
    .catch((err) => errorFunction('Data fetch করতে সমস্যা হয়েছে'));
};

const repoCardFunction = (username) => {
  fetch(api + username + '/repos?sort=created')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Repo fetch করতে সমস্যা হয়েছে');
      }
      return response.json();
    })
    .then((data) => {
      repoCardFunction(data);
    })
    .then((error) => {
      errorFunction(error.message);
    });
};

const userCard = (user) => {
  const id = user.name || user.login;
  const info = user.bio ? `<p>${user.bio}</p>` : '';
  const cardElement = `
<div class="card">
<div> <img src="${user.avatar_url}"alt="${user.name}" class="avaatr"></div>
<div class="user-info">

</div>
`;
};

inputform.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = inputBox.preventDefault();
  if (user) {
    userGetFunction(user);
    inputBox.value = '';
  }
});
