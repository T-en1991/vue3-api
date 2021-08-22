<template>
    mixin
  <button @click="getData">getData</button>
  {{a}}
  {{b}}
</template>

<script>
import userInfoMixin from "../mixins/userInfoMixin";
import a from "../mixins/userInfoMixin";
export default {
  name: "Minxin",
  mixins:[userInfoMixin,a]
}
</script>

<style scoped>

</style>
