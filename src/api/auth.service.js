import instance from "./core"
import { PATH_URL } from './apiConfig'

export const AuthService = {
    login(email, password) {
        return instance.post(PATH_URL, {
            email,
            password
        })
    }
}