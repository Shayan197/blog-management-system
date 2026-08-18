import User from '@/models/auth/user.model.js';

declare global {
    namespace Express {
        interface Request {
            userUid?: string;
            user?: User;
        }
    }
}

export {};
