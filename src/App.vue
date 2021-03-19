<template>
  <div>
    <Header></Header>
    <div class="main">
      <CountryCard v-for="item in dataArr" :key="item.name" :data="item"></CountryCard>


    </div>
  </div>
</template>

<script>

import '@/assets/css/base/reset.css'
import '@/assets/css/base/base.css'
import Header from "./components/header"
import CountryCard from "./components/countryCard"
export default {
  name: 'App',
  components: {
    Header,
    CountryCard
  },
  data(){
    return{
      dataArr: []
    }
  },
  methods:{
    getData(){
      const vm = this
      vm.axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
        vm.dataArr = response.data
        console.log(vm.dataArr)
      })
    }
  },
  mounted(){
    this.getData()
  },
}
</script>
<style>
  .main{

    width: 120rem;
    margin: 0 auto;
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>