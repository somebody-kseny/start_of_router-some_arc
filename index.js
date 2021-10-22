import { router } from "./router/index.js"
import { Header } from "./view/components/header/header.js";

const header = new Header();
router.start(location.pathname);

window.addEventListener('popstate', (event) => {
  router.popstate(location.pathname);
});