import { createApp } from 'vue'
import App from './App.vue'

// Body SVG
import MaleFront from './components/body_svg/MaleFront.vue'
import MaleBack from './components/body_svg/MaleBack.vue'

const app = createApp(App)

app.component('MaleFront', MaleFront);
app.component('MaleBack', MaleBack);

app
.mount('#app')
