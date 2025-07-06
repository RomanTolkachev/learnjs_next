import { TRegisterState } from "./model";

export const defaultState: TRegisterState = {
    error: "",
    success: false,
    fieldErrors: {
        login: "",
        password: ""
    }
}