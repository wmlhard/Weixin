<template lang="html">
    <div class="people">
        <div class="people_list">
            <img class="via" :src="via" alt="头像">
            <div class="viaName">
                <p class="name">{{name}}</p>
                <span>{{num}}</span>
            </div>
        </div>
        <img class="code" :src="code" alt="二维码">
        <img class="arrow" :src="arrow" alt="箭头">

    </div>

</template>

<script>
export default {
    data(){
        return{
            via:"./img/touxiang.png",
            name:"shenxianseng",
            num:"微信号：0123456",
            arrow:"./img/arrow.png",
            code:"./img/code.png"
        }
    }
}
</script>

<style lang="css">
    .people{
        width: 100%;
        height: 88px;
        background: #fff;
        margin-top: 15px;
    }
    .people_list{
        width: 80%;
        position: relative;
    }
    .via{
        width: 66px;
        height: 66px;
        margin:10px;
        vertical-align: middle;
    }
    .viaName{
        display: inline-block;
        vertical-align: middle;
    }
    .name{
        font-size:19px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    .arrow{
        position: absolute;
        top:116px;
        right: 0;
        margin-right: 15px;
    }
    .code{
        position: absolute;
        top: 113px;
        right: 30px;
    }
</style>
