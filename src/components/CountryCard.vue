<template>
    <router-link :to="'/detail/'+data.name" :class="$style.card">
        <div :class="$style.header">
            <div>
                <h3 :class="$style.name" v-html="countryData.name"></h3>
                <h4 :class="$style.nativeName" v-html="`(${countryData.nativeName})`"></h4>
            </div>
            <img :class="$style.logo" :src="countryData.flag" :alt="countryData.name">
        </div>
        <ul :class="$style.content">
            <li>
                <span :class="$style.title">Country Code (Alpha 2)</span>
                <span :class="$style.value" v-html="countryData.alpha2Code"></span>
            </li>
            <li>
                <span :class="$style.title">Country Code (Alpha 3)</span>
                <span :class="$style.value" v-html="countryData.alpha3Code"></span>
            </li>
            <li>
                <span :class="$style.title">callingCodes</span>
                <span :class="$style.value" v-html="countryData.callingCodes[0] || '--'"></span>
            </li>
            <li>
                <span :class="$style.title">Currency</span>
                <span :class="$style.value" v-html="countryData.currencies ? countryData.currencies[0].code : '--'"></span>
            </li>
            <li>
                <span :class="$style.title">Int. dial code</span>
                <span :class="$style.value" v-html="countryData.callingCodes[0]"></span>
            </li>
            <li>
                <span :class="$style.title">Region</span>
                <span :class="$style.value" v-html="countryData.region"></span>
            </li>
        </ul>
    </router-link>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{
            countryData: this.data
        }
    }
}
</script>

<style lang="scss" module>
    @import "@/sass/components/countryCard.module.scss";
</style>