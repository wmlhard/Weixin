<template lang="html">
  <div class="top">
      {{title}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:"我"
        }
    }
}
</script>

<style lang="css" scoped>
.top{
    width: 100%;
    height: 64px;
    background: #38373c;
    color:#fff;
    font-size:22px;
    text-align: center;
    padding-top: 26px;
    box-sizing: border-box;
}
</style>
