<script setup lang="ts">
import { router } from '@inertiajs/vue3'

interface Product {
  id: number
  name: string
  description: string
  price: number | string
}

interface PaginatedProducts {
  data: Product[]
  current_page: number
  last_page: number
  from: number
  to: number
  total: number
  links: Array<{ url: string | null, label: string, active: boolean }>
}

defineProps<{
  products: PaginatedProducts
}>()

const formatPrice = (price: number | string) => {
  const num = typeof price === 'string' ? parseFloat(price) : price
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(num)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Каталог товаров</h1>
      <p class="text-gray-500 mb-8">Найдите то, что вам нужно, среди нашего ассортимента</p>
        <div class="mb-4"><a class="text-3x1 font-bold"  href="/admin"> Вход в админку</a></div>
      <div v-if="products.data.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <article 
          v-for="product in products.data" 
          :key="product.id" 
          class="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col overflow-hidden"
        >
          <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{{ product.name }}</h3>
            <p class="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">{{ product.description }}</p>
            
            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span class="text-xl font-bold text-indigo-600">{{ formatPrice(product.price) }}</span>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">Товары не найдены</h3>
        <p class="mt-1 text-sm text-gray-500">Попробуйте изменить параметры поиска или вернитесь позже.</p>
      </div>

      <nav v-if="products.links && products.links.length > 3" class="mt-10 flex flex-col items-center gap-3">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="(link, i) in products.links"
            :key="i"
            @click="link.url && router.visit(link.url, { preserveScroll: true })"
            :disabled="!link.url"
            v-html="link.label"
            class="min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            :class="link.active 
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
              : link.url 
                ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400' 
                : 'bg-gray-100 text-gray-400 border-gray-200'"
          />
        </div>
        <p class="text-sm text-gray-500">
          Показано {{ products.from }}–{{ products.to }} из {{ products.total }} товаров
        </p>
      </nav>
    </div>
  </div>
</template>