import { Request, Response } from 'express';

import { frontErrorObj } from '@/utils/response.util.js';

interface ValidationResult {
    error: boolean;
    response: unknown;
}

// ================== queryReqFields =======================
// This function checks if the required fields are present in the query string.
const queryReqFields = (req: Request, res: Response, field_list: string[]): ValidationResult => {
    const resObj: Record<string, string> = {};
    for (const field of field_list) {
        const val = req.query[field];
        if (val == null || (typeof val === 'string' && val.trim() === '') || val === 'null') {
            resObj[field] = 'This field is required in query params';
        }
    }
    if (Object.keys(resObj).length !== 0) {
        return { error: true, response: frontErrorObj(res, resObj) };
    } else {
        return { error: false, response: {} };
    }
};

// ================== bodyReqFields =======================
// This function checks if the required fields are present in the request body.

const bodyReqFields = (req: Request, res: Response, field_list: string[]): ValidationResult => {
    const resObj: Record<string, string> = {};
    for (const field of field_list) {
        const val = req.body[field];
        if (val == null || (typeof val === 'string' && val.trim() === '') || val === 'null') {
            resObj[field] = 'This field is required.';
        }
    }
    if (Object.keys(resObj).length !== 0) {
        return { error: true, response: frontErrorObj(res, resObj) };
    } else {
        return { error: false, response: {} };
    }
};

export { queryReqFields, bodyReqFields };
