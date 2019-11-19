<template>
  <div class="wrap">
    <div class="cube">
      <div class="out-front">前</div>
      <div class="out-back">后</div>
      <div class="out-left">左</div>
      <div class="out-right">右</div>
      <div class="out-top">上</div>
      <div class="out-bottom">下</div>
      <span class="in-front">1</span>
      <span class="in-back">2</span>
      <span class="in-left">3</span>
      <span class="in-right">4</span>
      <span class="in-top">5</span>
      <span class="in-bottom">6</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Model'
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0
  }
  @keyframes rotate {
    0%{
      transform:rotateX(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(360deg) rotateY(360deg);
    }
  }
  .wrap {
    margin-top:180px;
    perspective:1000px;
  }
  .cube {
    margin:auto;
    width:200px;
    height:200px;
    position:relative;
    transform-style:preserve-3d;
  // transform:rotateX(-50deg) rotateY(-30deg);
    animation:rotate 10s infinite linear;
  }
  .cube>div {
    width:100%;
    height:100%;
    position:absolute;
    background-color: rgb(0, 0, 0);
    opcity:.1;
    border:1px #8ed solid;
    color:#fff;
    font-size:36px;
    font-weight:bold;
    font-family:"Microsoft Yahei",serif;
    text-align:center;
    line-height:200px;
    opacity:0.5;
    -webkit-transition: -webkit-transform 1s; /* For Safari 3.1 to 6.0 */
    transition: transform 1s;
  }
  .cube .out-front {
    transform:translateZ(100px);
  }
  .cube .out-back {
    transform:translateZ(-100px);
  }
  .cube .out-left {
    transform:rotateY(90deg) translateZ(-100px);
  }
  .cube .out-right {
    transform:rotateY(90deg) translateZ(100px);
  }
  .cube .out-top {
    transform:rotateX(90deg) translateZ(100px);
  }
  .cube .out-bottom {
    transform:rotateX(90deg) translateZ(-100px);
  }
  .cube:hover .out-front {
    transform:translateZ(200px);
  }
  .cube:hover .out-back {
    transform:translateZ(-200px);
  }
  .cube:hover .out-left {
    transform:rotateY(90deg) translateZ(-200px);
  }
  .cube:hover .out-right {
    transform:rotateY(90deg) translateZ(200px);
  }
  .cube:hover .out-top {
    transform:rotateX(90deg) translateZ(200px);
  }
  .cube:hover .out-bottom {
    transform:rotateX(90deg) translateZ(-200px);
  }
  .cube>span {
    display:block;
    width:100px;
    height:100px;
    border:1px #fdfffd solid;
    background-color:#5069ff;
    position:absolute;
    top:50px;
    left:50px;
    opcity:.9;
    color:#fff;
    font-size:16px;
    font-weight:bold;
    font-family:"Microsoft Yahei",serif;
    text-align:center;
    line-height:100px;
  }
  .cube .in-front {
    transform:translateZ(50px);
  }
  .cube .in-back {
    transform:translateZ(-50px);
  }
  .cube .in-left {
    transform:rotateY(90deg) translateZ(-50px);
  }
  .cube .in-right {
    transform:rotateY(90deg) translateZ(50px);
  }
  .cube .in-top {
    transform:rotateX(90deg) translateZ(50px);
  }
  .cube .in-bottom {
    transform:rotateX(90deg) translateZ(-50px);
  }
</style>
