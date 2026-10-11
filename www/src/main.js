import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'


const scripts = {'viz':'viz-lite.js'}
// const scripts = {'viz':'https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz-lite.js'}
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


import DatasetSelect from './components/DatasetSelect.vue';
import FirstSearch from './components/FirstSearch.vue';
import Graph from './components/Graph.vue';
import NextSearch from './components/NextSearch.vue';

const router = createRouter({
    routes: [
        {'path': '/', component: DatasetSelect },
        {'path': '/search', component: FirstSearch },
        {'path': '/graph', component: Graph },
        {'path': '/make/:item_id', component: NextSearch, props: true },
        {'path': '/use/:item_id', component: NextSearch, props: true },
    ],
    history: createWebHistory()
})

createApp(App)
    .use(router)
    .use(ui)
    .mount('#app');
