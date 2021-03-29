<template>
    <div :class="$style.detail">
        <div>
            <Scope></Scope>
            avasv
        </div>
        <div>
            asvasv
        </div>
        <div>
            asvasva
        </div>
    </div>
</template>
<script>
import { getCountry } from '@/api/index.js'
import Scope from "@/components/detail/scope.vue"
export default {
    components:{
        Scope
    },
    data(){
        return{
            data: '',
        }
    },
    created () {
    this.fetchData()
    },
    methods: {
        fetchData () {
        const vm = this;
        // this.error = this.post = null
        // this.loading = true
        getCountry( this.$route.params.name,{} ).then( res =>{
            vm.data = res[0]
            console.log(vm.data)
        })
        }
    }
}
</script>
<style lang="scss" module>
    @import "@/sass/pages/detail.module.scss";
</style>