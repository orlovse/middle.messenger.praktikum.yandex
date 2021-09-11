import { loginAPI } from './../api/auth';
import { router, ROUTES } from "..";

export class SigninController {
    public async signin(data) {
        try {
            await loginAPI(data);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log(error);
        }
    }
}
