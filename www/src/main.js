import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'


const scripts = {'viz':'https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz-lite.js'}
Object.entries(scripts).forEach(entry => {
            let tag = document.head.querySelector(`[src="${ entry[1] }"`);
            if (!tag) {
                tag = document.createElement("script");
                tag.setAttribute("id", entry[0]);
                tag.setAttribute("src", entry[1]);
                tag.setAttribute("type", 'text/javascript');
                document.head.appendChild(tag);
            }
        });

createApp(App)
    .use(FloatingVue)
    .mount('#app');

// import('proc-rs').then(mod => {
//     let app = createApp(App, {
//         proc_rs: mod
//     });
//     app.mount('#app');
// });
