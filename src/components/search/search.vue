<template>
    <section>
        <h1>Search for a country</h1>
        <input type="text" placeholder="Enter country name" v-model="keyword" @keyup="submitKeyWord" />
    </section>
</template>

<script>
export default {
    data(){
        return{
            keyword:''
        }
    },
    methods: {
        submitKeyWord(){
            this.$emit('test',this.keyword)
        }
    },
}
</script>

<style lang="scss" module scope>
    @import "@/sass/components/search/search.scss"
</style>