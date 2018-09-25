<!--  -->
<template>
  <div id="header-app">
      <span class="header-left">{{this.leftContent}}</span>
      <img id="img_research" src="../../assets/image/aba.png"/>
      <img id="img_add" src="../../assets/image/aba.png"/>
  </div>
</template>

<script>
const unread_flag = "10";
export default {
  unread_flag,
  data() {
    return {
      leftContent: "微信(" + unread_flag + ")"
    };
  },
  watch: {
     unread_flag:{
         
     } 
  }
};
</script>
<style lang='scss' scoped>
#header-app {
  width: 100%;
  height: 45px;
  background-color: #303036;
  position: absolute;
  left: 0px;
  top: 0px;
  color: white;
  display: table;
}
.header-left {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  left: 20px;
}
#img_research {
  width: 20px;
  height: 20px;
}
#img_add {
  width: 20px;
  height: 20px;
}
</style>