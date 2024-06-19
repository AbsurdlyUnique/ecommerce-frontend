<template>
    <transition-root
      as="template"
      :show="show"
      enter="transition ease-out duration-300"
      enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to="opacity-100 translate-y-0 sm:scale-100"
      leave="transition ease-in duration-200"
      leave-from="opacity-100 translate-y-0 sm:scale-100"
      leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="bg-background-light dark:bg-background-dark text-text-dark rounded-md border border-primary px-md py-lg shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-primary" id="modal-title">
                <slot name="title"></slot>
              </h3>
              <div class="mt-2">
                <p class="text-sm text-text-dark">
                  <slot name="content"></slot>
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <Button variant="primary" @click="close">
              Close
            </Button>
          </div>
        </div>
      </div>
    </transition-root>
  </template>
  
  <script setup lang="ts">
  import { TransitionRoot } from '@headlessui/vue';
  import { defineProps, defineEmits } from 'vue';
  import Button from './Button.vue';
  
  const props = defineProps({
    show: Boolean,
  });
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>