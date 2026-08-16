import { unauthorizedError, forbiddenError } from "../utils/response.util.js";
import User from "../models/auth/user.model.js";
import { jwtVerifier } from "../config/jwt.config.js";

// Middleware to validate JWT tokens

//================== Verify Token =====================
export const verifyToken = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;
        if(!accessToken) return unauthorizedError(res, 'No access token, authorization denaid');

        const decode = jwtVerifier(accessToken);
        if(decode.token !== 'access') return unauthorizedError(res, 'Invalid access token');
        req.userUid = decode.userUid;
        next();
    } catch (error) {
        return unauthorizedError(res, 'Invalid access token');
    }
}

// ================== Verify Refresh Token =====================
export const verifyRefreshToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return unauthorizedError(res, 'No refresh token, authorization denaid');

        const decode = jwtVerifier(refreshToken);
        if(decode.token !== 'refresh') return unauthorizedError(res, 'Invalid refresh token');
        req.userUid = decode.userUid;
        next();
    } catch (error) {
        return unauthorizedError(res, 'Invalid refresh token');
    }
}

// =================== VerifyTokenNSetUser ======================
export const VerifyTokenNSetUser = async (req, res, next) => {
    try{
        const uuid = req.userUid;
        const user = await User.findOne({ where: { uuid } });
        if(!user) return unauthorizedError(res, 'Invalid token');
        if(!user.isActive) return forbiddenError(res, 'Account is not active');
        req.user = user;
        next();
    } catch (error) {
        return unauthorizedError(res, 'Invalid token');
    }
}
