<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    id: string
    size?: string
    title?: string
    subtitle?: string
    hideClose?: boolean
    noCloseOnBackdrop?: boolean
  }>(),
  {
    size: 'xl',
    title: '',
    subtitle: '',
    hideClose: false,
    noCloseOnBackdrop: false,
  }
)

const { $bus } = useNuxtApp()

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

$bus.$on(`modal:${props.id}.open`, () => {
  openModal()
})
$bus.$on(`modal:${props.id}.close`, () => {
  closeModal()
})
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      as="div"
      class="relative z-10"
      :open="isOpen"
      @close="noCloseOnBackdrop ? false : closeModal()"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur backdrop-saturate-120"
          aria-hidden="true"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="transition duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="transition duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div :class="`flex relative w-full max-w-${props.size}`">
              <div class="max-w-xl" />
              <DialogPanel
                class="relative w-full transform overflow-hidden rounded-2xl bg-dark-600 p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  v-if="props.title"
                  as="h3"
                  class="text-[22px] font-medium leading-6 text-white"
                >
                  {{ props.title }}
                </DialogTitle>
                <div
                  v-if="props.subtitle"
                  class="mt-1.5 text-[12px] text-light"
                >
                  {{ props.subtitle }}
                </div>
                <div class="mt-6">
                  <slot />
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
