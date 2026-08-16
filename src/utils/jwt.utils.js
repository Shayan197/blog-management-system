import { jwtAccSigner, jwtRefrSigner } from '../config/jwt.config.js';

// function to generate Access token
const generateAccessToken = (user) => {
    return jwtAccSigner({ userUid: user.uuid, token: 'access'})
}

// function to generate refresh token
const generateRefreshToken = (user) => {
    return jwtRefrSigner({ userUid: user.uuid, token: 'refresh' })
}

export { generateAccessToken, generateRefreshToken };