<template>
  <div>
      <span>年龄</span>
    <h3>{{ age }}</h3>
    <button @click="addAge">操作暴露的方法改变</button>
    <button @click="changeAge">直接改变（不可以改变）</button>
  </div>
</template>

<script>
import {useAge} from "../setup/ref/useAge";

export default {
  name: "setup",
  setup() {
    const {
      age,
      addAge
    } = useAge()

    return {
      age,
      addAge
    }
  }
}
</script>

<style scoped>

</style>
