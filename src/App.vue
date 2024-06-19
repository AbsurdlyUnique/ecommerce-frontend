<template>
  <div id="app" class="max-w-7xl mx-auto p-8 text-center">
    <h1 class="text-5xl font-bold mb-lg">First test</h1>
    <Card>
      <template #header>Card Title</template>
      <template #body>This is some card content.</template>
      <template #footer>
        <Button variant="primary" @click="openModal">Open Modal</Button>
        <PopoverMenu>
          <template #title>Custom Popover Title</template>
          <template #content>
            This is custom popover content.
          </template>
        </PopoverMenu>
      </template>
    </Card>
    <Modal :show="isModalOpen" @close="closeModal">
      <template #title>Modal Title</template>
      <template #content>This is the modal content.</template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';
import Modal from './components/Modal.vue';
import PopoverMenu from './components/PopoverMenu.vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
