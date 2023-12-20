<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);
onMounted(() => {
  console.log(count.value);
});
</script>
<template>
  <div class="wrapper">11111</div>
</template>
<style scoped lang="less">
.wrapper {
}
</style>
