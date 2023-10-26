import exp from 'constants';
import { LemmyHttp } from 'lemmy-js-client'
import { useEffect, useState } from 'react'

const baseUrl = 'https://knocking.ru';
const client: LemmyHttp = new LemmyHttp(baseUrl);

export function useLemmy(): LemmyHttp {
    return client
}