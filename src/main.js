import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "./assets/tailwind.css";

//adds search icon to our library
library.add(faSearch);

//configures a globally registered component of font awesome icon
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");


