<!--  -->
<template>
  <div id="footerbar">
      <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="chatList">
        <img :src="img_cl" slot="icon">微信
      </mt-tab-item>
      <mt-tab-item id="friendList">
        <img v-bind:src="img_fl" slot="icon">通讯录
      </mt-tab-item>
      <mt-tab-item id="find">
        <img v-bind:src="img_f" slot="icon">发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img v-bind:src="img_m" slot="icon">我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false,
      isShow: true,
      img_cl: require("../../assets/image/sao-yi-sao/scan-book.png"),
      img_fl: require("../../assets/image/sao-yi-sao/scan-qr-code.png"),
      img_f: require("../../assets/image/sao-yi-sao/scan-street.png"),
      img_m: require("../../assets/image/yao-yi-yao/shake_icon_people.png")
    };
  },
  created() {
    this.selected='chatList';
  },
  methods: {},
  watch: {
    selected: {
      handler() {
        this.img_cl = require("../../assets/image/sao-yi-sao/scan-book.png");
        this.img_fl = require("../../assets/image/sao-yi-sao/scan-qr-code.png");
        this.img_f = require("../../assets/image/sao-yi-sao/scan-street.png");
        this.img_m = require("../../assets/image/yao-yi-yao/shake_icon_people.png");
        switch (this.selected) {
          case "chatList":
            this.$router.push("/ChatList");
            this.img_cl = require("../../assets/image/sao-yi-sao/scan-book_hl.png");
            break;
          case "friendList":
            this.$router.push("/Find");
            this.img_fl = require("../../assets/image/sao-yi-sao/scan-qr-code_hl.png");
            break;
          case "find":
            this.$router.push("/FriendList");
            this.img_f = require("../../assets/image/sao-yi-sao/scan-street_hl.png");
            break;
          case "my":
            this.$router.push("/My");
            this.img_m = require("../../assets/image/yao-yi-yao/shake_icon_people-hl.png");
            break;
          default:
            break;
        }
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>