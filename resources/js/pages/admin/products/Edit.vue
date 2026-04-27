<script setup lang="ts">
import { useForm, Link } from '@inertiajs/vue3'
import AdminLayout from '@/layouts/AdminLayout.vue'

const props = defineProps<{
  product?: any,
}>()

const isEdit = !!props.product

const form = useForm({
  name: props.product?.name || '',
  description: props.product?.description || '',
  price: props.product?.price || '',
  category_id: props.product?.category_id || '',
})

const submit = () => {
  if (isEdit) {
    form.put(`/admin/products/${props.product.id}`)
  } else {
    form.post('/admin/products')
  }
}
</script>

<template>
  <AdminLayout>
    <div class="p-6 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">
        {{ isEdit ? 'Редактирование товара' : 'Создание товара' }}
      </h1>

      <form @submit.prevent="submit" class="space-y-6 bg-white p-6 rounded-lg shadow border border-gray-200">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Название</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.name }"
            placeholder="Например: Красная футболка"
          />
          <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form.errors.name }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Цена (₽)</label>
          <input
            v-model="form.price"
            type="number"
            step="0.01"
            min="0"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.price }"
            placeholder="1500"
          />
          <p v-if="form.errors.price" class="text-red-500 text-sm mt-1">{{ form.errors.price }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Описание</label>
          <textarea
            v-model="form.description"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.description }"
            placeholder="Подробное описание товара..."
          ></textarea>
          <p v-if="form.errors.description" class="text-red-500 text-sm mt-1">{{ form.errors.description }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Категория</label>
          <input
            v-model="form.category_id"
            type="number"
            min="0"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            :class="{ 'border-red-500': form.errors.category_id }"
            placeholder="1500"
          />
          <p v-if="form.errors.category_id" class="text-red-500 text-sm mt-1">{{ form.errors.category_id }}</p>
        </div>

        <div class="flex gap-3 pt-2">
          <button
            type="submit"
            :disabled="form.processing"
            class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {{ form.processing ? 'Сохранение...' : (isEdit ? 'Обновить' : 'Создать') }}
          </button>
          
          <Link
            href="/admin/products"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            Отмена
          </Link>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>