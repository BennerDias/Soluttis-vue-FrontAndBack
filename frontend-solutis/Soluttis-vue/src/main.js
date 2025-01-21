import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router.js";
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext'; 


// Importando FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importando o BootstrapVue para Vue 3
import { BootstrapVueNext } from "bootstrap-vue-next";

// Adicionando ícones à biblioteca
library.add(faInstagram, faWhatsapp, faFacebook);

// Criando a instância da aplicação
const app = createApp(App);

// Registrando o componente FontAwesomeIcon globalmente
app.component("font-awesome-icon", FontAwesomeIcon);

// Usando o BootstrapVue
app.use(BootstrapVueNext);
app.use(router);
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
app.component('p-data-table', DataTable);
app.component('p-column', Column);
app.component('p-input-text', InputText); 
// Montando a aplicação
app.mount("#app");
document.documentElement.classList.add('p-dark');
