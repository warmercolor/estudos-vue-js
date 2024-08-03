<template>
  <q-page padding>
    <q-form class='row justify-center' @submit.prevent='handleRegister'>
      <p class='col-12 text-h5 text-center'>Register</p>
      <div class='col-md-4 col-sm-6 col-xs-10 q-gutter-y-md'>
        <q-input label='Name' v-model='form.name' />
        <q-input label='Email' v-model='form.email' />
        <q-input label='Password' type='password' v-model='form.password' />
        <div class='full-width q-pt-md'>
          <q-btn label='Register' color='primary' class='full-width' outline type='submit' />
        </div>
        <div class='full-width'>
          <q-btn label='Already registered?' color='primary' class='full-width' flat to='/login' />
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
  name: 'UserRegister'
})

const { register } = UseAuthUser()
const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: ''
})

const handleRegister = async () => {
  try {
    await register(form.value)
    router.push({
      name: 'email-confirmation',
      query: { email: form.value }
    })
  } catch (error) {
    alert(error.message)
  }
}
</script>
