<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: 'default',
  }
)

const sizeStyles = reactive<{
  [key: string]: string
}>({
  default: 'px-5 py-2 rounded-2',
  big: 'p-6.25 text-[20px] rounded-3.5',
})

const selectedSize = computed(() => sizeStyles[props.size] || sizeStyles.md)
</script>

<template>
  <button
    :class="`${selectedSize} flex items-center justify-center bg-blue hover:bg-blue-500 transition duration-200 active:scale-99`"
  >
    <slot />
  </button>
</template>
