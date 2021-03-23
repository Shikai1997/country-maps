<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import '@/assets/css/base/reset.css'
import '@/assets/css/base/base.css'
import Header from "./components/header"
export default {
    components: {
        Header,
    },
}
</script>