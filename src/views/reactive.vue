<template>
  <div>
    reactive

    <br>

    {{ name }}
    {{ age }}

    <hr/>

    <button @click="changeAgeData">changeData</button>
    <button @click="ch">ch</button>

    <hr>
    name: <input type="text" name="name" v-model="name">
    age:<input type="text" name="age" v-model="age">
  </div>
</template>

<script>
import {useUserInfo} from "../setup/reactive/useUserInfo";

export default {
  name: "setup",
  setup() {
    const {
      name,
      age,
      changeAge
    } = useUserInfo()

    const changeAgeData = () => {
      changeAge(2)
    }

    const ch = () => {
      name.value = '213'
    }

    return {
      name,
      age,
      changeAgeData,
      ch
    }
  }
}
</script>

<style scoped>

</style>
