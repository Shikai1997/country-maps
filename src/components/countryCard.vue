<template>
    <router-link :to="'/test/'+data.name" :class="$style.card">
        <div :class="$style.header">
            <div>
                <h3 :class="$style.name" v-html="countryData.name"></h3>
                <h4 :class="$style.nativeName" v-html="`(${countryData.nativeName})`"></h4>
            </div>
            <img :class="$style.logo" :src="countryData.flag" :alt="countryData.name">
        </div>
        <ul :class="$style.content">
            <li>
                <span :class="$style.content__title">alpha2Code</span>
                <span :class="$style.content__value" v-html="countryData.alpha2Code"></span>
            </li>
            <li>
                <span :class="$style.content__title">alpha3Code</span>
                <span :class="$style.content__value" v-html="countryData.alpha3Code"></span>
            </li>
            <li>
                <span :class="$style.content__title">callingCodes</span>
                <span :class="$style.content__value" v-html="countryData.callingCodes[0] || '--'"></span>
            </li>
            
            <li :class="$style.altSpellings">
                <span :class="$style.content__title">altSpellings</span>
                <ul :class="$style.content__value">
                    <li v-for="item in countryData.altSpellings" :key="item"> &lt; {{ item }} &gt; </li>
                </ul>
            </li>
        </ul>
    </router-link>
</template>

<script>
// import '@/assets/css/pages/countryCard.css'
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
    @import "@/sass/pages/countryCard.module.scss";
</style>