import { RouterItem } from '..';
import { UserController } from '../../controller/userController';

const userController = new UserController()

const routers: RouterItem[] = [
    {
        method: 'get',
        path: '/',
        handler: userController.getUserList.bind(userController)
    }
]

export default routers





