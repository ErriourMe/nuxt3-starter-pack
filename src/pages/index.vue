<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { useIdentity } from '~/stores/identity'
import DefaultNotification from '~/components/Notifications/DefaultNotification.vue'

const toast = useToast()
const identify = useIdentity()

const showToast = () => {
  toast(
    {
      component: DefaultNotification,
      props: {
        title: 'Hello toasty world!',
        text: 'This is default toast',
        type: 'success',
        timeout: 5000,
      },
    },
    {
      timeout: 5000,
    }
  )
}
</script>

<template>
  <OutlinePage>
    <h1>{{ $t('title') }}, {{ identify.fullName }}!</h1>

    <div class="mt-5 flex">
      <UtilsButton @click.native="$i18n.setLocale('ru')">
        <Icon name="circle-flags:ru" class="mr-2" />
        Русский
      </UtilsButton>
      <UtilsButton class="ml-2" @click.native="$i18n.setLocale('en')">
        <Icon name="circle-flags:us" class="mr-2" />
        English
      </UtilsButton>
    </div>

    <div class="mt-5 flex">
      <UtilsButton @click.native="$bus.$emit('modal:defaultModal.open')">
        Show modal
      </UtilsButton>
      <UtilsButton class="ml-2" @click.native="showToast">
        Show toast
      </UtilsButton>
      <UtilsButton v-tooltip="`This is tooltip!`" class="ml-2">
        Hover me
      </UtilsButton>
    </div>

    <hr class="border-dark-400 mt-10.675" />

    <div class="mt-8">
      <h3 class="text-xl">Form</h3>

      <div class="grid grid-cols-8 gap-4">
        <div class="mt-3">
          <FieldsInput placeholder="Input username" name="username">
            <template #prefix>
              <Icon name="ri:user-3-fill" class="w-5 h-5" />
            </template>
          </FieldsInput>
          <FieldsInput
            placeholder="****************"
            name="password"
            type="password"
          >
            <template #prefix>
              <Icon name="teenyicons:password-solid" class="w-5 h-5" />
            </template>
          </FieldsInput>
          <UtilsButton> Log in </UtilsButton>
        </div>
      </div>
    </div>

    <ModalsDefaultModal />
  </OutlinePage>
</template>
