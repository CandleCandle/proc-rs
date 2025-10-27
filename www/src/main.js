import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'


const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz-lite.js']
scripts.forEach(script => {
            let tag = document.head.querySelector(`[src="${ script }"`);
            if (!tag) {
                tag = document.createElement("script");
                tag.setAttribute("src", script);
                tag.setAttribute("type", 'text/javascript');
                document.head.appendChild(tag);
            }
        });

createApp(App).mount('#app');

// import('proc-rs').then(mod => {
//     let app = createApp(App, {
//         proc_rs: mod
//     });
//     app.mount('#app');
// });
