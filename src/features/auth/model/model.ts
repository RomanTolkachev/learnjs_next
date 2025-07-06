export type LoginFormState = {
    error?: string;
    success?: boolean;
    fieldErrors?: {
        login?: string;
        password?: string;
    };
};