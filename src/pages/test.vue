<template>
    <div>
        <h1 style="marginTop: 200px">{{ $route.params.name }}</h1>
    </div>
</template>
<script>
import { getCountry } from '@/api/index.js'
export default {
    data(){
        return{
            // loading: false,
            // post: null,
            // error: null
        }
    },
    created () {
    this.fetchData()
    },
    methods: {
        fetchData () {
        // this.error = this.post = null
        // this.loading = true
        getCountry( this.$route.params.name,{} ).then( res =>{
            console.log(res)
        })
        }
    }
}
</script>