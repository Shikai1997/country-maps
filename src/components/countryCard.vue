<template>
    <div class="card">
        <div class="header">
            <div>
                <h3 class="name"> {{ data.name }} </h3>
                <h4 class="nativeName">( {{ data.nativeName }} )</h4>
            </div>
            <img class="logo" :src="data.flag" :alt="data.name">
        </div>
        <ul class="content">
            <li>
                <span class="content__title">alpha2Code</span>
                <span class="content__value"> {{ data.alpha2Code }} </span>
            </li>
            <li>
                <span class="content__title">alpha3Code</span>
                <span class="content__value"> {{ data.alpha3Code }} </span>
            </li>
            <li>
                <span class="content__title">callingCodes</span>
                <span class="content__value"> {{ data.callingCodes[0] }} </span>
            </li>
            <li class="altSpellings">
                <span class="content__title">altSpellings</span>
                <ul class="content__value">
                    <li v-for="item in data.altSpellings" :key="item"> {{ item }} </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import '@/assets/css/pages/countryCard.css'
export default {
    props: ['data'],
    data(){
        return{
            
        }
    }
}
</script>