<template>
    <div class="relative inline-block text-left">
      <Popover>
        <PopoverButton class="rounded-md border border-primary px-md py-sm text-base font-semibold transition-colors duration-fast m-1.25 bg-primary text-background-light hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-offset-2">
          Popover
        </PopoverButton>
  
        <Transition
          enter="transition ease-out duration-100"
          enter-from="transform opacity-0 scale-95"
          enter-to="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leave-from="transform opacity-100 scale-100"
          leave-to="transform opacity-0 scale-95"
        >
          <PopoverPanel class="absolute z-10 mt-2 w-72 transform -translate-x-1/2 left-1/2 bg-background-light dark:bg-background-dark text-text-dark rounded-md border border-primary shadow-xl focus:outline-none">
            <div class="px-md py-lg">
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg leading-6 font-medium text-primary" id="popover-title">
                  <slot name="title"></slot>
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-text-dark">
                    <slot name="content"></slot>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
  </script>
  