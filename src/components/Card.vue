<template>
    <div class="p-lg bg-dark text-light rounded-xl border border-primary transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div class="text-xl font-semibold mb-md">
        <slot name="header" />
      </div>
      <div class="text-base leading-relaxed">
        <slot name="body" />
      </div>
      <div class="mt-md text-right">
        <slot name="footer" />
      </div>
    </div>
  </template>
  