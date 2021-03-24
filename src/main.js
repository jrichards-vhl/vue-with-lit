import { createApp } from 'vue'
import App from './App.vue'
import { DemoPanel } from './custom_elements/demo_panel';
// import { DemoSection } from './custom_elements/demo_section';

customElements.define('demo-panel', DemoPanel);
// customElements.define('demo-section', DemoSection);

createApp(App).mount('#vue-app');

