<script setup></script>

<template>
  <main class="grid justify-items-center items-center min-h-screen -mt-20">
    <form class="max-w-md w-full p-10 border-2 rounded-2xl border-gray-600">
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-whiteColor"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-greenColor focus:border-greenColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-whiteColor"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-greenColor focus:border-greenColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteColor dark:focus:ring-greenColor dark:focus:border-greenColor"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-greenColor dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-greenColor hover:bg-greenColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-greenColor dark:hover:bg-greenColor dark:focus:ring-greenColor"
      >
        Submit
      </button>
    </form>
  </main>
</template>
