<template>
    <div>
        <Header></Header>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue"
export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss" module>
    @import "@/sass/base/reset.module.scss";
    @import "@/sass/base/base.module.scss";
    @import "@/sass/components/main.module.scss";
</style>