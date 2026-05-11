import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
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
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
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
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::__invoke
 * @see app/Http/Controllers/DashboardController.php:11
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
export const posIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posIndex.url(options),
    method: 'get',
})

posIndex.definition = {
    methods: ["get","head"],
    url: '/pos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
posIndex.url = (options?: RouteQueryOptions) => {
    return posIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
posIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
posIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: posIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
    const posIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: posIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
        posIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: posIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
        posIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: posIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    posIndex.form = posIndexForm
/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
export const posCheckout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: posCheckout.url(options),
    method: 'post',
})

posCheckout.definition = {
    methods: ["post"],
    url: '/pos/checkout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
posCheckout.url = (options?: RouteQueryOptions) => {
    return posCheckout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
posCheckout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: posCheckout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
    const posCheckoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: posCheckout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
        posCheckoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: posCheckout.url(options),
            method: 'post',
        })
    
    posCheckout.form = posCheckoutForm
/**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
export const posOrders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posOrders.url(options),
    method: 'get',
})

posOrders.definition = {
    methods: ["get","head"],
    url: '/pos/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
posOrders.url = (options?: RouteQueryOptions) => {
    return posOrders.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
posOrders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: posOrders.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
posOrders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: posOrders.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
    const posOrdersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: posOrders.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
        posOrdersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: posOrders.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\OrderController::posOrders
 * @see app/Http/Controllers/Pos/OrderController.php:11
 * @route '/pos/orders'
 */
        posOrdersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: posOrders.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    posOrders.form = posOrdersForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
export const productsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsIndex.url(options),
    method: 'get',
})

productsIndex.definition = {
    methods: ["get","head"],
    url: '/pos/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
productsIndex.url = (options?: RouteQueryOptions) => {
    return productsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
productsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
productsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
    const productsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: productsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
        productsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\ProductController::productsIndex
 * @see app/Http/Controllers/Pos/ProductController.php:17
 * @route '/pos/products'
 */
        productsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    productsIndex.form = productsIndexForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
export const productsCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsCreate.url(options),
    method: 'get',
})

productsCreate.definition = {
    methods: ["get","head"],
    url: '/pos/products/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
productsCreate.url = (options?: RouteQueryOptions) => {
    return productsCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
productsCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
productsCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productsCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
    const productsCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: productsCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
        productsCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\ProductController::productsCreate
 * @see app/Http/Controllers/Pos/ProductController.php:51
 * @route '/pos/products/create'
 */
        productsCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    productsCreate.form = productsCreateForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsStore
 * @see app/Http/Controllers/Pos/ProductController.php:63
 * @route '/pos/products'
 */
export const productsStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: productsStore.url(options),
    method: 'post',
})

productsStore.definition = {
    methods: ["post"],
    url: '/pos/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsStore
 * @see app/Http/Controllers/Pos/ProductController.php:63
 * @route '/pos/products'
 */
productsStore.url = (options?: RouteQueryOptions) => {
    return productsStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsStore
 * @see app/Http/Controllers/Pos/ProductController.php:63
 * @route '/pos/products'
 */
productsStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: productsStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsStore
 * @see app/Http/Controllers/Pos/ProductController.php:63
 * @route '/pos/products'
 */
    const productsStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: productsStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsStore
 * @see app/Http/Controllers/Pos/ProductController.php:63
 * @route '/pos/products'
 */
        productsStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: productsStore.url(options),
            method: 'post',
        })
    
    productsStore.form = productsStoreForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
export const productsEdit = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsEdit.url(args, options),
    method: 'get',
})

productsEdit.definition = {
    methods: ["get","head"],
    url: '/pos/products/{product}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
productsEdit.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return productsEdit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
productsEdit.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productsEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
productsEdit.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productsEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
    const productsEditForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: productsEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
        productsEditForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\ProductController::productsEdit
 * @see app/Http/Controllers/Pos/ProductController.php:119
 * @route '/pos/products/{product}/edit'
 */
        productsEditForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: productsEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    productsEdit.form = productsEditForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsUpdate
 * @see app/Http/Controllers/Pos/ProductController.php:135
 * @route '/pos/products/{product}'
 */
export const productsUpdate = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: productsUpdate.url(args, options),
    method: 'put',
})

productsUpdate.definition = {
    methods: ["put"],
    url: '/pos/products/{product}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsUpdate
 * @see app/Http/Controllers/Pos/ProductController.php:135
 * @route '/pos/products/{product}'
 */
productsUpdate.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return productsUpdate.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsUpdate
 * @see app/Http/Controllers/Pos/ProductController.php:135
 * @route '/pos/products/{product}'
 */
productsUpdate.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: productsUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsUpdate
 * @see app/Http/Controllers/Pos/ProductController.php:135
 * @route '/pos/products/{product}'
 */
    const productsUpdateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: productsUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsUpdate
 * @see app/Http/Controllers/Pos/ProductController.php:135
 * @route '/pos/products/{product}'
 */
        productsUpdateForm.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: productsUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    productsUpdate.form = productsUpdateForm
/**
* @see \App\Http\Controllers\Pos\ProductController::productsDestroy
 * @see app/Http/Controllers/Pos/ProductController.php:218
 * @route '/pos/products/{product}'
 */
export const productsDestroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: productsDestroy.url(args, options),
    method: 'delete',
})

productsDestroy.definition = {
    methods: ["delete"],
    url: '/pos/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Pos\ProductController::productsDestroy
 * @see app/Http/Controllers/Pos/ProductController.php:218
 * @route '/pos/products/{product}'
 */
productsDestroy.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return productsDestroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\ProductController::productsDestroy
 * @see app/Http/Controllers/Pos/ProductController.php:218
 * @route '/pos/products/{product}'
 */
productsDestroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: productsDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Pos\ProductController::productsDestroy
 * @see app/Http/Controllers/Pos/ProductController.php:218
 * @route '/pos/products/{product}'
 */
    const productsDestroyForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: productsDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Pos\ProductController::productsDestroy
 * @see app/Http/Controllers/Pos/ProductController.php:218
 * @route '/pos/products/{product}'
 */
        productsDestroyForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: productsDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    productsDestroy.form = productsDestroyForm