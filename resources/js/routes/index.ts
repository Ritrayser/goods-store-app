import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:28
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\AuthUserController::postLogin
* @see app/Http/Controllers/AuthUserController.php:33
* @route '/login'
*/
export const postLogin = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postLogin.url(options),
    method: 'post',
})

postLogin.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthUserController::postLogin
* @see app/Http/Controllers/AuthUserController.php:33
* @route '/login'
*/
postLogin.url = (options?: RouteQueryOptions) => {
    return postLogin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthUserController::postLogin
* @see app/Http/Controllers/AuthUserController.php:33
* @route '/login'
*/
postLogin.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postLogin.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthUserController::postLogin
* @see app/Http/Controllers/AuthUserController.php:33
* @route '/login'
*/
const postLoginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postLogin.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthUserController::postLogin
* @see app/Http/Controllers/AuthUserController.php:33
* @route '/login'
*/
postLoginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: postLogin.url(options),
    method: 'post',
})

postLogin.form = postLoginForm
