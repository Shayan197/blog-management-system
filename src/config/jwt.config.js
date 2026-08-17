import { createSigner, createVerifier } from 'fast-jwt';

const jwtSecret = process.env.JWT_SECRET_KEY;
const jwtAlgorithm = 'HS256';

const jwtAccessExpiration = '1d';
const jwtRefreshExpiration = '7d';

export const jwtVerifier = createVerifier({ key: jwtSecret, algorithms: jwtAlgorithm });
export const jwtAccSigner = createSigner({
    key: jwtSecret,
    algorithm: jwtAlgorithm,
    expiresIn: jwtAccessExpiration,
});
export const jwtRefrSigner = createSigner({
    key: jwtSecret,
    algorithm: jwtAlgorithm,
    expiresIn: jwtRefreshExpiration,
});
