<template>
  <div>
    {{name}}
  </div>
</template>

<script>
import {ref,h} from 'vue'
export default {
  name: "child",
  setup(){
    return new Promise(res=>{
      setTimeout(()=>{
        return res({name:123})
      },3000)
    })
  }
}
</script>

<style scoped>

</style>
