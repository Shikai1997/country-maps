<template>
  <main :class="$style.container">
      <CountryCard v-for="item in dataArr" :key="item.name" :data="item"></CountryCard>
  </main>
</template>

<script>

import CountryCard from "@/components/CountryCard.vue"
import { getAllCountries } from '@/api/index.js';

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
      getAllCountries({name: 'test'}).then( res =>{
        vm.dataArr = res.data
      })
      
    }
  },
  mounted(){
    this.getData()
  },
}
</script>
<style lang="scss" module>
  .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>