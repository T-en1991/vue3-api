<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{a}}

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import a from "../mixins/userInfoMixin";
export default {
  name: 'Home',
  mixins:[a],
  components: {
    HelloWorld
  }
}
</script>
