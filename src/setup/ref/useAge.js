import {ref, readonly} from 'vue'

/*
  ref:用于对基础数据类型的声明监听
*/

export const useAge=()=>{
  const _age=ref(18)
  const age=readonly(_age)
  const addAge=()=>{
    _age.value+=1;
  }
  return {
    age,
    addAge
  }
}
