import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
const PosPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PosPageController.url(options),
    method: 'get',
})

PosPageController.definition = {
    methods: ["get","head"],
    url: '/pos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
PosPageController.url = (options?: RouteQueryOptions) => {
    return PosPageController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
PosPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PosPageController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
PosPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PosPageController.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
    const PosPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: PosPageController.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
        PosPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PosPageController.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Pos\PosPageController::__invoke
 * @see app/Http/Controllers/Pos/PosPageController.php:12
 * @route '/pos'
 */
        PosPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PosPageController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    PosPageController.form = PosPageControllerForm
export default PosPageController