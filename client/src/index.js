import { onRequest } from "./database.js";
import Bio from "./modules/bio/Bio.js";
import addBioEventListeners from "./modules/bio/events";
//import Gallery from "./modules/gallery/Gallery.js";
import Nav from "./modules/nav/Nav.js";

const App = async () => {
  return `
    ${Nav()}
    <div class="container">
      ${await Bio()}
    </div>
  `;
};

onRequest.onsuccess = async () => {
  document.getElementById("root").innerHTML = await App();
  addBioEventListeners();
};
