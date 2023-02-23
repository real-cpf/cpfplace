<template>

<div :style="{
    'background-color':color,
    width:'300px',
    height:'300px'
    }" >

    <select v-model="color">
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
    </select>
    <div style="color: black;" v-for="i in [1,2,3,4,5]">
        {{ bodyText }}
    </div>
</div>
</template>

<script>
export default {
    name:'RCCard',
    data(){
        return {
            color:'red'
        }
    },
    props:{
        bodyText:'default'
    }

}
</script>