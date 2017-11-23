<template lang="html">
    <div id="container">
        <top></top>
        <people></people>
        <wallet></wallet>
        <bottom></bottom>
    </div>
</template>

<script>
    import top from "./top.vue"
    import people from "./people.vue"
    import wallet from "./wallet.vue"
    import bottom from "./bottom.vue"
    export default {
        components:{
            top,
            people,
            wallet,
            bottom
        }
    }
</script>

<style lang="css">
    #container{
        width:100vw;
        height:100vh;
        background:#efeff4;
    }
</style>