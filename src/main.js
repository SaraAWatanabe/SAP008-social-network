import { router } from './navigation/router.js';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
