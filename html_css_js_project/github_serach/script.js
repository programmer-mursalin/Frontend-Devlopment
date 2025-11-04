// Dynamic Axios load
let fetchScript = document.createElement('script');
fetchScript.src =
  'https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js';
fetchScript.integrity =
  'sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==';
fetchScript.crossOrigin = 'anonymous';

fetchScript.onload = () => {
  const api = 'https://api.github.com/users/';
  const main = document.getElementById('main');
  const inputForm = document.getElementById('userInput');
  const inputBox = document.getElementById('inputBox');

  // Fetch user data
  const userGetFunction = (username) => {
    axios
      .get(api + username)
      .then((response) => {
        userCard(response.data);
        repoGetFunction(username);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          errorFunction('এই username এর কোনো প্রোফাইল নেই');
        } else {
          errorFunction('User data আনার সময় সমস্যা হয়েছে');
        }
      });
  };

  // Fetch user repos
  const repoGetFunction = (username) => {
    axios
      .get(api + username + '/repos?sort=created')
      .then((response) => {
        repoCardFunction(response.data);
      })
      .catch((err) => {
        errorFunction('Repo fetch করতে সমস্যা হয়েছে');
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
};

document.head.appendChild(fetchScript);
