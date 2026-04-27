import { createInertiaApp } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue'

createInertiaApp({
    title: (title) => 'Goods Store',
    layout: (page) => {
        if (page.startsWith('Admin/')) {
            return () => AdminLayout
        }
        return null // ваш дефолтный лейаут
        }
});