import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:33
* @route '/admin/products'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AdminController::store
* @see app/Http/Controllers/AdminController.php:47
* @route '/admin/products'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::store
* @see app/Http/Controllers/AdminController.php:47
* @route '/admin/products'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::store
* @see app/Http/Controllers/AdminController.php:47
* @route '/admin/products'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::store
* @see app/Http/Controllers/AdminController.php:47
* @route '/admin/products'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::store
* @see app/Http/Controllers/AdminController.php:47
* @route '/admin/products'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const products = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
}

export default products