<!-- resources/js/Pages/auth/Login.vue -->
<script setup lang="ts">
import { useForm, Link, Head } from '@inertiajs/vue3'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

// Отправка формы
const submit = () => {
  form.post('/login')
}
</script>

<template>
  <Head title="Вход" />

  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      
      <!-- Заголовок -->
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Вход в систему</h1>
        <p class="text-sm text-gray-500 mt-1">Введите email и пароль для доступа</p>
      </div>

      <form @submit.prevent="submit" class="space-y-5">
        <div v-if="form.errors.email || form.errors.password" class="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
          {{ form.errors.email || form.errors.password || 'Неверные учетные данные' }}
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.email }"
            placeholder="admin@example.com"
            autofocus
          />
          <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form.errors.email }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.password }"
            placeholder="••••••••"
          />
          <p v-if="form.errors.password" class="text-red-500 text-sm mt-1">{{ form.errors.password }}</p>
        </div>

        <div class="flex items-center">
          <input
            v-model="form.remember"
            id="remember"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label for="remember" class="ml-2 block text-sm text-gray-700">Запомнить меня</label>
        </div>

        <button
          type="submit"
          :disabled="form.processing"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {{ form.processing ? 'Вход...' : 'Войти' }}
        </button>
      </form>
    </div>
  </div>
</template>