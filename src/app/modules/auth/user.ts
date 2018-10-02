export interface Authenticate {
    email: string;
    password: string;
}

export interface User {
    token: string;
    user: {
        id: string;
        company_id: string;
        email: string;
        product: string;
        name: {
            first: string;
            last: string;
            middle: string;
        };
        role: {
        }
    }
}
