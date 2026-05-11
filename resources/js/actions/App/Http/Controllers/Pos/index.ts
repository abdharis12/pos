import PosPageController from './PosPageController'
import CheckoutController from './CheckoutController'
import OrderController from './OrderController'
import ProductController from './ProductController'
const Pos = {
    PosPageController: Object.assign(PosPageController, PosPageController),
CheckoutController: Object.assign(CheckoutController, CheckoutController),
OrderController: Object.assign(OrderController, OrderController),
ProductController: Object.assign(ProductController, ProductController),
}

export default Pos