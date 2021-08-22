<template>
  <div>
    parent


    <Suspense>
      <Child></Child>

      <template #fallback>
        <div>11111111111111</div>
      </template>

    </Suspense>

  </div>


</template>

<script>
import Child from "./child";
import {reactive, Suspense} from 'vue'
export default {
  name: "parent",
  components:{Child,Suspense},
  setup() {
    const list=reactive({
      aa:'11',
      bb:'22'
    })
    const fun=(e)=>{
        console.log(e)
        list.bb=e
    }

    return{
      list,
      fun
    }
  }
}
</script>

<style scoped>

</style>
