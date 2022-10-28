import login from '../pages/login/index.js';
import cadastro from '../pages/cadastro/index.js';
import home from '../pages/home/index.js';
import criarperfil from '../pages/criarperfil/index.js';

const main = document.querySelector('#root');

export const router = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '':
    case '#login':
      main.appendChild(login());
      break;
    case '#home':
      main.appendChild(home());
      break;
    case '#register':
      main.appendChild(cadastro());
      break;
    case '#profile':
      main.appendChild(criarperfil());
      break;
    default:
      // eslint-disable-next-line no-alert
      alert('Page not found!');
  }
};
