<template lang="html">
  <div class="bottom">
    <div class="list" v-for="item in arr">
        <i :class="item.icon"></i><br/>
        <span>{{item.book}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[
                {
                    icon:"glyphicon glyphicon-user",
                    book:"微信"
                },
                {
                    icon:"glyphicon glyphicon-user",
                    book:"通讯录"
                },
                {
                    icon:"glyphicon glyphicon-user",
                    book:"发现"
                },
                {
                    icon:"glyphicon glyphicon-user",
                    book:"我"
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
    .bottom{
        height: 50px;
        background: #fff;
        border-top:1px solid #ccc;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .list{
        float: left;
        width: 25%;
        height: 49px;
        text-align: center;
        padding-top: 8px;
    }
</style>
