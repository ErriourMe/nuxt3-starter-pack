<template>
  <div class="bg-white dark:(bg-dark) rounded-lg p-3 shadow-lg">
    <div class="flex flex-row items-center">
      <div class="mr-6">
        <span
          v-if="props.title"
          class="font-semibold text-gray-900 dark:(text-white)"
        >
          {{ props.title }}
        </span>
        <span v-if="props.text" class="block text-gray-500 dark:text-white">
          {{ props.text }}
        </span>
      </div>

      <button
        type="button"
        class="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-dark-700 dark:hover:bg-dark-800"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  text: {
    type: String,
    required: false,
    default: undefined,
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
  },
  timeout: {
    type: Number,
    required: false,
    default: 10000,
  },
  timeoutProgress: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
