import { createSigner, createVerifier } from 'fast-jwt';

import { jwtSecret } from '@/config/initial.config.js';

const jwtAlgorithm = 'HS256';

const jwtAccessExpiration = '1d';
const jwtRefreshExpiration = '7d';

export interface TokenPayload {
    userUid: string;
    token: 'access' | 'refresh';
}

export const jwtVerifier = createVerifier({
    key: jwtSecret,
    algorithms: [jwtAlgorithm],
}) as unknown as (token: string) => TokenPayload;

export const jwtAccSigner = createSigner({
    key: jwtSecret,
    algorithm: jwtAlgorithm,
    expiresIn: jwtAccessExpiration,
}) as unknown as (payload: TokenPayload) => string;

export const jwtRefrSigner = createSigner({
    key: jwtSecret,
    algorithm: jwtAlgorithm,
    expiresIn: jwtRefreshExpiration,
}) as unknown as (payload: TokenPayload) => string;
