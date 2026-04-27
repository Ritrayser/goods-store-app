import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:12
* @route '/api/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:12
* @route '/api/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:12
* @route '/api/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:12
* @route '/api/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthUserController::login
* @see app/Http/Controllers/AuthUserController.php:12
* @route '/api/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

const AuthUserController = { login }

export default AuthUserController