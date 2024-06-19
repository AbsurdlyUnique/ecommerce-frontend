<!-- src/pages/index.vue -->
<template>
    <DefaultLayout>
      <template v-slot:default>
        <div>
          <h1>Home Page</h1>
          <router-link to="/about">Go to About</router-link>
        </div>
      </template>
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  </script>