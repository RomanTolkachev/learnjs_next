import { LoginFormState } from "./model";

export const defaultState: LoginFormState = {
    error: "",
    success: false,
    fieldErrors: {
        login: "",
        password: ""
    }
}