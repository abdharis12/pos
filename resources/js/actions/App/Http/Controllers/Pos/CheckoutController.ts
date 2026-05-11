import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
const CheckoutController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CheckoutController.url(options),
    method: 'post',
})

CheckoutController.definition = {
    methods: ["post"],
    url: '/pos/checkout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
CheckoutController.url = (options?: RouteQueryOptions) => {
    return CheckoutController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
CheckoutController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: CheckoutController.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
    const CheckoutControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: CheckoutController.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Pos\CheckoutController::__invoke
 * @see app/Http/Controllers/Pos/CheckoutController.php:15
 * @route '/pos/checkout'
 */
        CheckoutControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: CheckoutController.url(options),
            method: 'post',
        })
    
    CheckoutController.form = CheckoutControllerForm
export default CheckoutController