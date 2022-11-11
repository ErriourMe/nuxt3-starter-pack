<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    title?: string
    type?: string
    name?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    title: '',
    type: 'text',
    name: '',
  }
)

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

const defaultStyle = `
  outline-none
  px-2
  transition-color duration-300
  bg-gray-600
  dark:focus:border-white focus:border-gray-900
`

const modelValue = useSyncProps<string>(props, 'modelValue', emit)
const inputRondedStyle = computed(() =>
  slots.prefix ? 'rounded-r' : 'rounded'
)

const onInput = () => emit('update:modelValue', modelValue.value)
</script>

<template>
  <div class="mb-4">
    <div class="flex relative overflow-hidden">
      <div
        v-if="slots.prefix"
        :class="`pl-4 pr-2 py-2 rounded-l-lg rounded-r-none ${defaultStyle} border-r-0`"
      >
        <slot name="prefix" />
      </div>
      <input
        v-model="modelValue"
        :type="props.type"
        :name="props.name"
        :class="`flex-1 block w-full rounded-r-lg ${inputRondedStyle} ${defaultStyle}`"
        :placeholder="placeholder"
        @input="onInput"
      />
    </div>
    <slot name="bottom" />
  </div>
</template>
