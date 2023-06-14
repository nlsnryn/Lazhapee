<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["close-modal", "delete-location"]);
defineProps({
  deleteModal: {
    type: Boolean,
    default: false,
  },
  checkOut: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="deleteModal || checkOut"
      class="absolute w-full bg-black bg-opacity-30 h-screen top-5 left-0 right-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div
          v-if="deleteModal || checkOut"
          class="p-4 bg-whiteColor dark:bg-primary self-start mt-40 sm:mt-32 max-w-screen-md rounded-md"
        >
          <slot />
          <div v-if="deleteModal" class="flex gap-3 sm:gap-5">
            <button
              @click="$emit('delete-location')"
              class="text-primary dark:text-whiteColor mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md duration-150 hover:bg-red-600 text-sm"
            >
              Yes
            </button>
            <button
              @click="$emit('close-modal')"
              class="text-primary dark:text-whiteColor mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md duration-150 text-sm hover:bg-red-600"
            >
              No
            </button>
          </div>
          <div v-if="checkOut" class="flex justify-center">
            <button
              @click="$emit('close-modal')"
              class="text-primary dark:text-whiteColor mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md duration-150 text-sm bg-greenColor hover:bg-greenColor"
            >
              Okay
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-outer-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-outer-leave-active {
  transition: opacity 0.8s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
