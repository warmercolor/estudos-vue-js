<template>
  <q-page padding>
    <q-form class='row justify-center' @submit.prevent='handleLogin'>
      <p class='col-12 text-h5 text-center'>Login</p>
      <div class='col-md-4 col-sm-6 col-xs-10 q-gutter-y-md'>
        <q-input label='Email' v-model='form.email' />
        <q-input label='Password' type='password' v-model='form.password' />
        <div class='full-width q-pt-md'>
          <q-btn label='Login' color='primary' class='full-width' outline type='submit' />
        </div>
        <div class='full-width'>
          <q-btn label='Register' color='primary' class='full-width' flat to='/register' />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import UseAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'UserLogin'
})

const { login } = UseAuthUser()
const router = useRouter()
const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  try {
    const user = await login({ email: form.value.email, password: form.value.password })
    if (user) {
      router.push({ name: 'me' })
    }
  } catch (error) {
    alert(error.message)
  }
}
</script>
