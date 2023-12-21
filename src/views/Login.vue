<script setup>
import { reactive, computed, ref } from "vue";
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const arer_contain = ref(null);
const onFinish = (values) => {
  console.log("Success:", values);
  console.log(111);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
const add = () => {
  arer_contain.value.style.display = "none";
};
</script>
<template>
  <div class="containers">
    <div class="content">
      <div data-v-37dfd6fc="" class="logo" style="font-size: 20px">
        <svg
          data-v-37dfd6fc=""
          viewBox="0 0 24 24"
          fill="none"
          style="font-size: 30px; height: 30px"
        >
          <path
            data-v-37dfd6fc=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.737a4.263 4.263 0 100-8.526 4.263 4.263 0 000 8.526z"
            fill="#165DFF"
          ></path>
          <path
            data-v-37dfd6fc=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.263 7.737H21v4.353l-.013.384h-4.75c.024-.237.026-.41.026-.41V7.737zM11.526 3.013c.207-.01.402-.013.402-.013h4.335v4.737h-4.35s-.202.004-.387.025v-4.75z"
            fill="#165DFF"
          ></path>
          <path data-v-37dfd6fc="" fill="#16D2AC" d="M15 3h6v6h-6z"></path>
        </svg>
        <span data-v-37dfd6fc="">Arco</span>
      </div>
      <div class="content-inner">
        <div ref="arer_contain" style="display: block">
          <form class="login-form">
            <div data-v-25742a12="" class="login-form-title">登录 Arco</div>
            <div data-v-25742a12="" class="login-form-sub-title">
              内部项目管理系统
            </div>
            <a-form
              :model="formState"
              name="normal_login"
              class="login-form"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
              >
                <a-input
                  placeholder="请输入用户名"
                  v-model:value="formState.username"
                >
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your password!' },
                ]"
              >
                <a-input-password
                  placeholder="请输入密码"
                  v-model:value="formState.password"
                >
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item>
                <a-form-item name="remember" no-style>
                  <a-checkbox v-model:checked="formState.remember"
                    >记住我</a-checkbox
                  >
                </a-form-item>
                <a class="login-form-forgot" href="">忘记密码</a>
              </a-form-item>

              <a-form-item>
                <a-button
                  :disabled="disabled"
                  type="primary"
                  html-type="submit"
                  class="login-form-button arco-active"
                  >登录</a-button
                >
              </a-form-item>
              <a-form-item>
                <a-button block @click="add">注册</a-button>
              </a-form-item>
            </a-form>
          </form>
        </div>
        <div ref="arer_contwo" style="display: none" class="arer_contwo">
          <form class="login-form">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入用户名"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入用户名"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <div class="flex">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
              >
                <a-input
                  class="arer_han"
                  placeholder="验证码"
                  v-model:value="formState.username"
                ></a-input>
              </a-form-item>
              <a-button type="primary">Primary Button</a-button>
            </div>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="请输入密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="确认密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <div class="flex end_flex">
              <a-button type="primary">注册</a-button>
              <a-button type="primary">去登陆</a-button>
            </div>
          </form>
        </div>
        <div ref="arer_contwo" style="display: none" class="arer_contwo">
          <form class="login-form">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入邮箱"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <div class="flex">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
              >
                <a-input
                  class="arer_han"
                  placeholder="验证码"
                  v-model:value="formState.username"
                ></a-input>
              </a-form-item>
              <a-button type="primary">获取验证码</a-button>
            </div>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="请输入新密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="确认密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <div class="flex end_flex">
              <a-button type="primary">重置密码</a-button>
              <a-button type="primary">去登陆</a-button>
            </div>
          </form>
        </div>
      </div>
      <div class="content-footer"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.containers {
  display: flex;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}

.containers .content {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  // padding-bottom: 40px;
}

.containers .logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
}

.login-form {
  position: relative;
  max-width: 320px;
  overflow: hidden;
  height: 390px;
}
.login-form-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #1d2129;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.login-form-sub-title {
  font-size: 16px;
  line-height: 24px;
  color: #86909c;
}

.ant-input-affix-wrapper {
  margin-top: 10px !important;
}
.login-form-forgot {
  margin-left: 190px;
}
.ant-form-item-control-input-content {
  padding: 10px;
}

.arco-active {
  width: 100% !important;
}

// .ant-form-item-control-input-content {
//   width: 40px;
// }
.ant-input-affix-wrapper {
  padding: 9px 11px !important;
}

.ant-form-item-control-input-content > button {
  height: 40px !important;
}

.ant-form-item {
  margin-bottom: 12px;
}

.ant-form {
  padding-top: 20px !important;
}

.arer_contwo {
  min-width: 320px;
}

.arer_han {
  width: 170px;
}

.flex {
  display: flex !important;
  height: 41.6px;
  justify-content: space-between;
}
.flex > * {
  height: 41.6px !important;
}
.flex .ant-input {
  // margin-top: 2px;
  padding: 9px 11px;
}
.end_flex > * {
  width: 150px;
}
</style>
