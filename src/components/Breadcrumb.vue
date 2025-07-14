<template>
  <div class="breadcrumb" aria-label="Breadcrumb">
    <div class="container">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="$route.name !== 'Home'">{{ $route.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

