import { createApp } from 'vue'
import App from './App.vue'

// Body SVG
import MaleFront from './components/body_svg/MaleFront.vue'
import MaleBack from './components/body_svg/MaleBack.vue'
import FemaleFront from './components/body_svg/FemaleFront.vue'
import FemaleBack from './components/body_svg/FemaleBack.vue'

const app = createApp(App)

app.component('MaleFront', MaleFront);
app.component('MaleBack', MaleBack);
app.component('FemaleFront', FemaleFront);
app.component('FemaleBack', FemaleBack);

app
.mount('#app')
