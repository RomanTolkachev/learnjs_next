export type TRegisterState = {
    success: boolean
    fieldErrors: {
        login: string,
        password: string
    }
    error: string
}