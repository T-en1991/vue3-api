import {reactive, toRefs,readonly} from 'vue'


export const useUserInfo=()=>{

  const userInfo=reactive({
    name:'T-en',
    age:18
  })

  const users=readonly(userInfo)

  const {name,age}=toRefs(users)


  const changeAge=(e)=>{
    console.log(e)
    userInfo.age+=e
  }

  const changeName=(e)=>{
    console.log(e)
    userInfo.name=e
  }

  return{
    name,
    age,
    changeAge,
    changeName
  }
}
