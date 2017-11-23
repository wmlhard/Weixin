<template lang="html">
  <div class="wallet">
    <div class="purse">
        <img class="pouch" :src="pouch" alt="钱包">
        <span class="bag">{{bag}}</span>
        <img class="arrow1" :src="arrow1" alt="箭头">
    </div>

    <ul>
        <li class="pag" v-for="(item,index) in arr">
            <img class="pouch" :src="item.pic" alt="item.word">
            <span class="bag">{{item.word}}</span>
            <img class="arrow1" :src="arrow1" alt="箭头">
        </li>
    </ul>

    <div class="purse">
        <img class="pouch" :src="set" alt="设置">
        <span class="bag">{{setting}}</span>
        <img class="arrow1" :src="arrow1" alt="箭头">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pouch:"./img/1.jpg",
            bag:"钱包",
            arrow1:"./img/arrow.png",
            set:"./img/6.jpg",
            setting:"设置",
            arr:[
                {
                    pic:"./img/2.jpg",
                    word:"收藏"
                },
                {
                    pic:"./img/3.jpg",
                    word:"相册"
                },
                {
                    pic:"./img/4.jpg",
                    word:"卡包"
                },
                {
                    pic:"./img/5.jpg",
                    word:"表情"
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
    .wallet{
        width: 100%;
    }
    .purse{
        width: 100%;
        height: 44px;
        background: #fff;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        margin:21px 0;
        position: relative;
    }
    .pouch{
        height: 42px;
        vertical-align: middle;
    }
    .bag{
        vertical-align: middle;
    }
    .arrow1{
        float: right;
        margin: 15px;
    }
    .pag{
        width: 100%;
        background: #fff;
        border-top:1px solid #ccc;
    }

</style>
