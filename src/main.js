import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app=createApp(App);

app.mixin({
  data(){
    return{
      b:2
    }
  },
  methods:{
    getDataB(){
      this.b++
      console.log('getDataB')
    }
  },
})

console.log(app)
  app.use(store).use(router).mount('#app')
