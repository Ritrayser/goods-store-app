<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import { ref, computed } from 'vue'

const page = usePage()
const sidebarOpen = ref(false)

const isActive = (href: string) => {
  return page.url.startsWith(href)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">

    <div 
      v-if="sidebarOpen" 
      @click="sidebarOpen = false" 
      class="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
    />


    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="flex items-center h-16 px-6 border-b border-gray-200">
        <span class="text-xl font-bold text-indigo-600">Admin</span>
      </div>

      <nav class="p-4 space-y-1">
        <Link
          href="/admin/products"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="isActive('/admin/products') 
            ? 'bg-indigo-50 text-indigo-700' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
        >
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Список товаров
        </Link>

        <Link
          href="/admin/users"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="isActive('/admin/users') 
            ? 'bg-indigo-50 text-indigo-700' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
        >
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          Список пользователей
        </Link>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">
      <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
        <button 
          @click="sidebarOpen = true" 
          class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-600 hidden sm:inline">Администратор</span>
          <button class="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
            Выйти
          </button>
        </div>
      </header>
      
      <main class="flex-1 p-4 md:p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>