<template>
  <div class="login-container">
    <div class="login-img"></div>
    <div class="login-form">
      <n-form ref="formRef" inline
        :label-width="80"
        :model="formValue"
        :rules="rules">
        <n-form-item path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="输入用户名">
            <template #prefix>
              <n-icon :component="PersonSharp" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="user.password">
          <n-input type="password" v-model:value="formValue.user.password" placeholder="输入密码">
            <template #prefix>
              <n-icon :component="EyeSharp" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button attr-type="button" @click="handleValidateClick">
            登录
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormInst, useMessage } from 'naive-ui'
import { PersonSharp, EyeSharp } from '@vicons/ionicons5'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const formValue = ref({
  user: {
    name: '',
    password: ''
  }
})
const rules = ref({
  user: {
    name: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur'
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['blur']
    }
  }
})

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(errors => {
    if(!errors) {
      message.success('valid')
    } else {
      console.log(errors)
      message.error('invalid')
    }
  })
}
</script>

<style lang="scss" scoped>
  .login-container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    .login-img {
      background: url(../../assets/login.png);
      width: 555px;
      height: 340px;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .login-form {
      .n-form {
        flex-direction: column;

        .n-form-item {
          margin: 0;
          width: 240px;
        }
      }
    }
  }
</style>