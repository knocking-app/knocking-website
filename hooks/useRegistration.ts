import { CaptchaResponse, LemmyHttp, Register } from 'lemmy-js-client'
import { useEffect, useState } from 'react'
import { useLemmy } from './useLemmy';

export interface NewRegister extends Omit<Register, 'show_nsfw' | 'honeypot' | 'answer'> {}

export function useRegistration() {
    const [captcha, setCaptcha] = useState<CaptchaResponse>()
    const lemmy = useLemmy();

    useEffect(() => {
        if (!captcha) {
            lemmy.getCaptcha()
            .then(res => {
                if (!res.ok) throw new Error("Не удалось получить captcha")
                return res.ok
            })
            .then(setCaptcha)
        }
    }, [captcha, lemmy])

    return { captcha, registration }

    function registration(form: NewRegister) {
        return lemmy.register({ ...form, show_nsfw: false})
    }
}