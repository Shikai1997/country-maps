<template>
  <div>
    <Search @test="getKeyWord"></Search>
    <main :class="$style.container" v-if="dataArr.length !== 0">
      <CountryCard
        v-for="item in countryResult"
        :key="item"
        :data="item"
      ></CountryCard>
    </main>
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue";
import Search from "@/components/search/search.vue";
import { getAllCountries } from "@/api/index.js";

export default {
  name: "App",
  components: {
    CountryCard,
    Search,
  },
  data() {
    return {
      dataArr: [],
      keyWord: "",
    };
  },
  methods: {
    getData() {
      const vm = this;
      getAllCountries().then((res) => {
        vm.dataArr = res.data;
      });
    },
    getKeyWord(val) {
      this.keyWord = val;
    },
    search(arr) {
      // 轉成大寫再比較
      const key = this.keyWord.toUpperCase();
      arr.push(
        this.dataArr.filter((item) => {
          const itemName = item.name.toUpperCase();
          return itemName.indexOf(key) > -1;
        })
      );
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    countryResult() {
      if (this.keyWord === "") {
        console.log('none');
        return this.dataArr;
      }
      const searchArr = [];
      this.search(searchArr);
      return searchArr[0];
    },
  },
};
</script>
<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
