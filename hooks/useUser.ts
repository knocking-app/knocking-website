import { Login, LoginResponse } from 'lemmy-js-client';
import { useLemmy } from './useLemmy';
import { NewRegister, useRegistration } from './useRegistration';
import { useState } from 'react';

export type LoginForm = Omit<Login, 'totp_2fa_token'>

export function useUser() {
    const [login, setLogin] = useState<LoginResponse>()

    const lemmy = useLemmy()
    const registration = useRegistration()

    return {
        login,
        auth,
        registrate
    }

    async function auth(form: LoginForm) {
        const login = await lemmy.login(form)
        setLogin(login)
    }

    async function registrate(form: NewRegister) {
        const reg = await registration.registration(form)
        setLogin(reg)
    }
}