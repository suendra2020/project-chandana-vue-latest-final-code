<template>
  <div class="row">
    <div v-for="(member, index) in members" :key="index" class="col-md-4 mb-4">
      <b-card class="h-100">
        <h5>{{ member.name }}</h5>
        <p class="text-muted mb-1">{{ member.title }}</p>
        <p>{{ member.desc }}</p>
      </b-card>
    </div>
  </div>
</template>

<script setup>
defineProps({
  members: {
    type: Array,
    required: true
  }
})
</script>
