<template>
  <main class="main">
      <CountryCard v-for="item in dataArr" :key="item.name" :data="item"></CountryCard>
  </main>
</template>

<script>


import '@/assets/css/pages/main.css'
import CountryCard from "./components/countryCard"
import { getAllCountries } from './js/api';


export default {
  name: 'App',
  components: {
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
      getAllCountries({}).then( res =>{
        vm.dataArr = res.data
      })
      
    }
  },
  mounted(){
    this.getData()
  },
}
</script>