//Interfaces relacionadas ao fluxo de usuário

export interface IUser {
    use_uuid: string;
    use_name?: string | null
    use_email?: string | null
}


export interface IUserRepository {
    createUser(user_name: string, user_email: string, user_paassword: string): Promise<boolean | null>
    findByEmail(user_email: string): Promise<IUser | undefined>
    findByID(user_uuid: string): Promise<IUser | undefined | null>
}