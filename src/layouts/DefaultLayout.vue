<template>
    <div>
      <header>
        <h1>My Site</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </header>
      <main>
        <slot></slot> <!-- Slot for page content -->
      </main>
      <footer>
        <p>&copy; 2024 My Site</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // Script setup can be used here
  </script>
  