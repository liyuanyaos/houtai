<script setup>
import { ref, onMounted } from "vue";
// import { Button } from "ant-design-vue";
const count = ref(0);

onMounted(() => {
  console.log(count.value);
});
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="logo text-[20vw]" style="font-size: 20px">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style="font-size: 30px; height: 30px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.737a4.263 4.263 0 100-8.526 4.263 4.263 0 000 8.526z"
            fill="#165DFF"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.263 7.737H21v4.353l-.013.384h-4.75c.024-.237.026-.41.026-.41V7.737zM11.526 3.013c.207-.01.402-.013.402-.013h4.335v4.737h-4.35s-.202.004-.387.025v-4.75z"
            fill="#165DFF"
          ></path>
          <path fill="#16D2AC" d="M15 3h6v6h-6z"></path>
        </svg>
        <span>Arco</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  display: flex;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    .logo {
      position: fixed;
      top: 24px;
      left: 22px;
      z-index: 1;
      display: inline-flex;
      align-items: center;
    }
  }
}
</style>
