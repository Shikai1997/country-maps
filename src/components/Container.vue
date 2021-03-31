<template>
  <div>
    <Search @test="getKeyWord"></Search>
    <main :class="$style.container" v-if="dataArr.length !== 0">
        <CountryCard v-for="item in countryResult" :key="item.name" :data="item"></CountryCard>
    </main>
  </div>
</template>

<script>

import CountryCard from "@/components/CountryCard.vue"
import Search from "@/components/search/search.vue"
import { getAllCountries } from '@/api/index.js';

export default {
  name: 'App',
  components: {
    CountryCard,
    Search
  },
  data(){
    return{
      dataArr: [],
      searchArr: [],
      keyWord: '',
    }
  },
  methods:{
    getData(){
      const vm = this
      getAllCountries({name: 'test'}).then( res =>{
        vm.dataArr = res.data
      })
    },
    getKeyWord(val){
      this.keyWord = val
    },
    search(){
      // 搜尋之前先清空
      this.searchArr.length = 0
      this.searchArr.push(this.dataArr.filter((item)=>{
        return item.name.indexOf(this.keyWord) > -1
      }))
    }
  },
  mounted(){
    this.getData()
  },
  computed:{
    countryResult(){
      if(this.keyWord === ''){
        return this.dataArr
      }
      this.search()
      return this.searchArr[0]
    }
  },
}
</script>
<style lang="scss" module>
  .container{
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
</style>