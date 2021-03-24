<template>
    <router-link :to="'/test/'+data.name" class="card">
        <div class="header">
            <div>
                <h3 class="name" v-html="countryData.name"></h3>
                <h4 class="nativeName" v-html="`(${countryData.nativeName})`"></h4>
            </div>
            <img class="logo" :src="countryData.flag" :alt="countryData.name">
        </div>
        <ul class="content">
            <li>
                <span class="content__title">alpha2Code</span>
                <span class="content__value" v-html="countryData.alpha2Code"></span>
            </li>
            <li>
                <span class="content__title">alpha3Code</span>
                <span class="content__value" v-html="countryData.alpha3Code"></span>
            </li>
            <li>
                <span class="content__title">callingCodes</span>
                <span class="content__value" v-html="countryData.callingCodes[0] || '--'"></span>
            </li>
            
            <li class="altSpellings">
                <span class="content__title">altSpellings</span>
                <ul class="content__value">
                    <li v-for="item in countryData.altSpellings" :key="item"> &lt; {{ item }} &gt; </li>
                </ul>
            </li>
        </ul>
    </router-link>
</template>

<script>
import '@/assets/css/pages/countryCard.css'
export default {
    props: ['data'],
    data(){
        return{
            countryData: this.data
        }
    }
}
</script>