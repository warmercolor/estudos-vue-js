<template>
  <q-page padding>
    <p class="text-h6">Thanks for registering!</p>
    <p class="text-body1">
      Please, confirm your email to finish registering:
      <strong> {{ $route.query.email }} </strong>
    </p>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'EmailComfirmation'
})
</script>
