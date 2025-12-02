// Dynamic Fetch Version (No Axios)
const api = 'https://api.github.com/users/';
const main = document.getElementById('main');
const inputForm = document.getElementById('userInput');
const inputBox = document.getElementById('inputBox');

// Fetch user data
const userGetFunction = (username) => {
  fetch(api + username)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('এই username এর কোনো প্রোফাইল নেই');
        } else {
          throw new Error('User data আনার সময় সমস্যা হয়েছে');
        }
      }
      return response.json(); // JSON এ রূপান্তর
    })
    .then((data) => {
      userCard(data);
      repoGetFunction(username);
    })
    .catch((error) => {
      errorFunction(error.message);
    });
};

// Fetch user repos
const repoGetFunction = (username) => {
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
    .catch((error) => {
      errorFunction(error.message);
    });
};

// Render user card
const userCard = (user) => {
  const id = user.name || user.login;
  const info = user.bio ? `<p>${user.bio}</p>` : '';
  const cardElement = `
        <div class="card">
            <div><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></div>
            <div class="user-info">
                <h2>${id}</h2>
                ${info}
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>`;
  main.innerHTML = cardElement;
};

// Render error message
const errorFunction = (error) => {
  const cardHTML = `<div class="card"><h1>${error}</h1></div>`;
  main.innerHTML = cardHTML;
};

// Render repos
const repoCardFunction = (repos) => {
  const reposElement = document.getElementById('repos');
  reposElement.innerHTML = '';
  for (let i = 0; i < 5 && i < repos.length; i++) {
    const repo = repos[i];
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposElement.appendChild(repoEl);
  }
};

// Handle form submit
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = inputBox.value.trim();
  if (user) {
    userGetFunction(user);
    inputBox.value = '';
  }
});
