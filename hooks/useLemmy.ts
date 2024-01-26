import { LemmyHttp } from 'lemmy-js-client'

const baseUrl = 'https://knocking.ru';
const client: LemmyHttp = new LemmyHttp(baseUrl);

export function useLemmy(): LemmyHttp {
    return client
}