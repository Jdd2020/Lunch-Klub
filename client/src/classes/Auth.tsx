export interface AuthData {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
}

export class Auth {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;

    constructor(authData: AuthData) {
        this.id = authData.id;
        this.email = authData.email;
        this.first_name = authData.first_name;
        this.last_name = authData.last_name;
        this.is_active = authData.is_active;
        this.is_staff = authData.is_staff;
        this.is_superuser = authData.is_superuser;
    }

    get fullName(): string {
        return `${this.first_name} ${this.last_name}`.trim();
    }

    get isAdmin(): boolean {
        return this.is_staff || this.is_superuser;
    }
}
