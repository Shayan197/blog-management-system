import { Request, Response, NextFunction } from 'express';

import { jwtVerifier } from '@/config/jwt.config.js';
import User from '@/models/auth/user.model.js';
import { unauthorizedError, forbiddenError } from '@/utils/response.util.js';

// Middleware to validate JWT tokens

//================== Verify Token =====================
export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const accessToken = req.cookies.accessToken as string | undefined;
        if (!accessToken) {
            unauthorizedError(res, 'No access token, authorization denaid');
            return;
        }

        const decode = jwtVerifier(accessToken);
        if (decode.token !== 'access') {
            unauthorizedError(res, 'Invalid access token');
            return;
        }
        req.userUid = decode.userUid;
        next();
    } catch (_error) {
        unauthorizedError(res, 'Invalid access token');
    }
};

// ================== Verify Refresh Token =====================
export const verifyRefreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const refreshToken = req.cookies.refreshToken as string | undefined;
        if (!refreshToken) {
            unauthorizedError(res, 'No refresh token, authorization denaid');
            return;
        }

        const decode = jwtVerifier(refreshToken);
        if (decode.token !== 'refresh') {
            unauthorizedError(res, 'Invalid refresh token');
            return;
        }
        req.userUid = decode.userUid;
        next();
    } catch (_error) {
        unauthorizedError(res, 'Invalid refresh token');
    }
};

// =================== VerifyTokenNSetUser ======================
export const VerifyTokenNSetUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const uuid = req.userUid;
        const user = await User.findOne({ where: { uuid } });
        if (!user) {
            unauthorizedError(res, 'Invalid token');
            return;
        }
        if (!user.isActive) {
            forbiddenError(res, 'Account is not active');
            return;
        }
        req.user = user;
        next();
    } catch (_error) {
        unauthorizedError(res, 'Invalid token');
    }
};
