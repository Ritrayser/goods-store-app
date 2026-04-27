<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3'
import AdminLayout from '@/layouts/AdminLayout.vue'


defineProps<{
  products: any
}>()


const deleteProduct = (id: number) => {
  if (confirm('Вы точно хотите удалить этот товар?')) {
    router.delete(`/admin/products/${id}`, {
      onSuccess: () => {
        
      }
    })
  }
}
</script>

<template>
  <AdminLayout>
    <div class="p-6">
    
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Товары</h1>
        <Link 
          href="/admin/products/create" 
          class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Добавить товар
        </Link>
      </div>


      <div class="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Название</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Цена</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Описание</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in products.data" :key="product.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ product.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.price }} ₽</td>
              <td class="px-6 py-4 text-sm text-gray-500 truncate max-w-[200px]">
                {{ product.description || '—' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link 
                  :href="`/admin/products/${product.id}/edit`" 
                  class="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Редактировать
                </Link>
                <button 
                  @click="deleteProduct(product.id)" 
                  class="text-red-600 hover:text-red-900"
                >
                  Удалить
                </button>
              </td>
            </tr>


            <tr v-if="products.data.length === 0">
              <td colspan="5" class="px-6 py-8 text-center text-sm text-gray-500">
                Товары не найдены. Добавьте первый!
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4 flex justify-between items-center text-sm text-gray-600">
        <span>Показано {{ products.from }}–{{ products.to }} из {{ products.total }}</span>
        <div class="flex gap-2">
          <Link 
            v-if="products.prev_page_url" 
            :href="products.prev_page_url" 
            class="px-3 py-1 border rounded hover:bg-gray-100"
          >
            ← Назад
          </Link>
          <Link 
            v-if="products.next_page_url" 
            :href="products.next_page_url" 
            class="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Вперёд →
          </Link>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>