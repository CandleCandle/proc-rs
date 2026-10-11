<script setup>
import { ref, onMounted, onUpdated, watch, triggerRef, nextTick } from 'vue';
import CurrentProcessList from './CurrentProcessList.vue';
import CurrentItemList from './CurrentItemList.vue';
import { ActiveNodeWrapper } from './active_node_wrapper.js';

/*
 * There are occasions where `Viz` has yet to load, so we need to
 * wait for that.
 *
 * We can only try to render the graph when the element into which
 * we place it has loaded, so we need the 'onMounted'
 *
 * Both of these have to be true, so respond to events on each;
 * check the other and only render when both are true.
 */

const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);

function propagate() {
    emit('cfg_update');
}

const open = ref(true);

const viz_zoom = ref(100);
const viz_elem = ref();

const viz_ready = ref((typeof Viz) != 'undefined');
document.head.querySelector('#viz').addEventListener('load', function() {
    viz_ready.value = true;
    emit('cfg_update');
});
watch(viz_ready, (ready) => {
    console.log("Viz has loaded, attempting rendering.");
    if (ready && updated.value) {
        build_graph();
    }
});

async function build_graph() {
    cfg.calculate();
    console.log("processes", cfg.get_processes());
    console.log("requirements", cfg.get_requirements());
    console.log("import/export", cfg.get_imports_exports());
    console.log("intermediates", cfg.get_intermediate_items());
    console.log("defaulted", cfg.get_defaulted_items());
    console.log("initial", cfg.get_initial_matrix());
    console.log("reduced", cfg.get_reduced_matrix());
    let content = cfg.to_digraph();
    console.log("graph", content);
    let inner = Viz(
        content,
        {
            format: 'svg',
            engine: 'dot'
        });

    console.log('viz element', viz_elem);
    viz_elem.value.innerHTML = inner.replaceAll(/(fill|stroke)="[^"]+" ?/g, '');

    add_graph_event_listeners(viz_elem.value);
}

const updated = ref(false);
onMounted(() => {
    console.log("Graph is now mounted, attempting rendering.");
    updated.value = true;
    if (viz_ready.value) {
        build_graph();
    }
});
onUpdated(() => {
    console.log("Graph is now mounted, attempting rendering.");
    updated.value = true;
    if (viz_ready.value) {
        build_graph();
    }
});

async function add_graph_event_listeners(viz_element) {
    let elems = viz_element.getElementsByClassName('node');
    for (let i = 0; i < elems.length; ++i) {
        let node_id = elems.item(i).getElementsByTagName("title").item(0).firstChild.nodeValue;
        console.log("child node element: ", elems.item(i), node_id);
        elems.item(i).addEventListener('click', create_node_click_listener(node_id));
    };
}

const toggleActiveNode = ref(false);
const activeNode = ref(null);
watch(activeNode, (v) => toggleActiveNode.value = true);

function create_node_click_listener(node_id) {
    // l-click: send/show details to/in the sidebar.
    // r-click: open context menu (Nuxt ContextMenu)
    // if it is a resource node, then the options want to be
    // * make
    // * use
    // * set as requirement (pre-filled)
    // * set as I/O
    // * set as intermediate
    //
    // if it is a process node
    // * remove
    // * adjust modifiers
    return (evt) => {
        console.log("graph node clicked", node_id, evt);
        let updated_node_id = node_id.replaceAll('_', '-');
        if (node_id.startsWith('process_')) {
            let proc_id = updated_node_id.replace('process-', '');
            console.log("looking for a thing with id", node_id);
            activeNode.value = ActiveNodeWrapper.create('process', cfg.get_processes().find(
                ap => {
                    return ap.process.id === proc_id;
                }
            ));
        } else {
            let req = cfg.get_requirements().find(r => r.item.id === updated_node_id);
            if (req) {
                activeNode.value = ActiveNodeWrapper.create(ActiveNodeWrapper.ItemRequirement, req);
                return;
            }
            let io = cfg.get_imports_exports().find(r => r.id === updated_node_id);
            if (io) {
                activeNode.value = ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIo, io);
                return;
            }
            let intermediate = cfg.get_intermediate_items().find(r => r.id === updated_node_id);
            if (intermediate) {
                activeNode.value = ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIntermediate, intermediate);
                return;
            }
            let def = cfg.get_defaulted_items().find(r => r.id === updated_node_id);
            if (def) {
                activeNode.value = ActiveNodeWrapper.create(ActiveNodeWrapper.ItemDefaulted, def);
                return;
            }
        }
    }
}

function update_active_node(replacement) {
    console.log("updated activeNode from event", replacement);
    activeNode.value = replacement;
    triggerRef(activeNode);
    forceReRenderItem();
}

const renderComponent = ref(true);

const forceReRenderItem = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

</script>

<template>
    <UApp>
        <div class="flex flex-1">
            <USidebar
                v-model:open="open"
                variant="sidebar"
                collapsible="offcanvas"
                side="left"
                :ui="{
                    container: 'h-full'
                }"
                :style="{
                    '--sidebar-width': '25rem'
                }"
                >
                <template #header>
                    {{ cfg.get_current_data_set() }}
                    <br />
                    <RouterLink to="/" @click="cfg.reset()">(reset)</RouterLink>
                </template>

                <details :open="toggleActiveNode" v-if="activeNode != null">
                    <summary class="header">Current {{ activeNode.is_process() ? "Process" : "Item" }}</summary>
                    <ActiveNode :cfg="cfg" :cfg_fu="cfg_fu" :node="activeNode" @cfg_update="propagate" @active_node="update_active_node" />
                </details>

                <details>
                    <summary class="header">Current Processes</summary>
                    <CurrentProcessList @cfg_update="propagate" @active_node="update_active_node" :cfg="cfg" :cfg_fu="cfg_fu" />
                </details>

                <details>
                    <summary  class="header">Current Items</summary>
                    <CurrentItemList v-if="renderComponent" :cfg="cfg" :cfg_fu="cfg_fu" @active_node="update_active_node"/>
                </details>

                <details>
                    <summary class="header">Current Factories</summary>
                    <CurrentFactoryList :cfg="cfg" :cfg_fu="cfg_fu" />
                </details>

                <template #footer>
                    version / {{ cfg_fu }}
                </template>
            </USidebar>

            <div class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-default bg-default">
                <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default grid grid-cols-2">
                    <div style="justify-self: start;">
                        <UButton
                            icon="i-lucide-panel-left"
                            color="neutral"
                            variant="ghost"
                            aria-label="Toggle sidebar"
                            @click="open = !open"
                        />
                    </div>
                    <div style="justify-self: end;">
                        <UButton
                            icon="i-lucide-zoom-out"
                            color="neutral"
                            variant="ghost"
                            aria-label="increase graph zoom"
                            @click="viz_zoom -= 10"
                        />
                        <UButton
                            icon="i-lucide-zoom-in"
                            color="neutral"
                            variant="ghost"
                            aria-label="decrease graph zoom"
                            @click="viz_zoom += 10"
                        />
                    </div>
                </div>

                <div :style="{'zoom': viz_zoom + '%'}" ref="viz_elem" class="p-4 overflow-auto">... loading ...</div>
            </div>
        </div>
    </UApp>
</template>



<style>

:root {
    color-scheme: light dark;
    --fg: light-dark(#333, #ccc);
    --bg: light-dark(#fff, #333);
    --item-net-producer-fg: light-dark(#fff, #fff);
    --item-net-producer-bg: light-dark(#f00, #f00);
    --item-net-consumer-fg: light-dark(#333, #333);
    --item-net-consumer-bg: light-dark(#0f0, #0f0);
    --item-net-equal-fg: light-dark(#333, #fff);
    --item-net-equal-bg: light-dark(#fff, #333);

}

.graph {
    fill-opacity: 0.0;
}

.node {
    cursor: pointer;
    fill-opacity: 1.0;
    stroke: var(--fg);
    fill: var(--bg);
}
.node.net-producer {
    stroke: var(--item-net-producer-fg);
    fill: var(--item-net-producer-bg);
}
.node.net-consumer {
    stroke: var(--item-net-consumer-fg);
    fill: var(--item-net-consumer-bg);
}
.node.net-equal {
    stroke: var(--item-net-equal-fg);
    fill: var(--item-net-equal-bg);
}
.node:hover {
    text-decoration: underline;
}

.edge {
    fill-opacity: 0.0;
    stroke: var(--fg);
}
.edge>polygon {
    fill-opacity: 1.0;
    fill: var(--fg);
}

g text {
    font-family: inherit;
    font-size: 70%;
}

</style>

