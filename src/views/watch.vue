<template>
  <h1>watch</h1>
  <div>
    <input type="text" v-model="userName">
  </div>
  <div>
    <input type="text" v-model="name">
  </div>
  <div>
    <input type="text" v-model="age">
  </div>
{{name}}
  <button @click="changeRefs">changeRefs</button>
</template>

<script>
import {ref, toRefs, reactive,watch,watchEffect} from 'vue'

export default {
  name: "watch",
  setup(){
    const userName=ref('');
    const userInfo=reactive({name: {name:'123',age:12}})
    const {name}=reactive(userInfo)
    const {age}=toRefs(name)

    const changeRefs=()=>{
      name.value='new'
      userName.value='userName'
      console.log(userName)
      console.log(userInfo)
    }

    watch(userName,(n,o)=>{
      console.log(n,o)
    })

    watch(userInfo,(n,o)=>{
      console.log(n,o)
    })
    watch(()=>userInfo.name,(n,o)=>{
      console.log(n,o)
    })
    watch(()=>userInfo.name.age,(n,o)=>{
      console.log(n,o)
    })

    watchEffect(()=>{
      console.log(userInfo.name.age)
      setTimeout(()=>{
        console.log(1)
      },3000)
    })


    return{
      userName,
      name,
      age,
      changeRefs
    }
  }
}
</script>

<style scoped>

</style>
