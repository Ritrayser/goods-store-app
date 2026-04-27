import ProductController from './ProductController'
import AuthUserController from './AuthUserController'
import WebsiteController from './WebsiteController'
import AdminController from './AdminController'

const Controllers = {
    ProductController: Object.assign(ProductController, ProductController),
    AuthUserController: Object.assign(AuthUserController, AuthUserController),
    WebsiteController: Object.assign(WebsiteController, WebsiteController),
    AdminController: Object.assign(AdminController, AdminController),
}

export default Controllers