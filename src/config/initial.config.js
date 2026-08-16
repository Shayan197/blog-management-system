import dotenv from "dotenv";
dotenv.config();
import { getIPAddress } from "../utils/utils.js";
// ==========================================================
//                Current Enviroment
// ==========================================================

const nodeEnv = process.env.NODE_ENV || "local";

// ==========================================================
//                Check Enviroment Variables
// ==========================================================

if(!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL in environment env file");
if(!process.env.DATABASE_NAME) throw new Error("Missing DATABASE_NAME in environment env file");
if(!process.env.PORT) throw new Error("Missing PORT in environment env file");
if(!process.env.JWT_SECRET_KEY) throw new Error("Missing JWT_SECRET_KEY in environment env file");
if(nodeEnv === 'production' && !process.env.DOMAIN) throw new Error("Missing DOMAIN in environment env file");

// for email
if(!process.env.EMAIL) throw new Error("Missing EMAIL in environment env file.");
if(!process.env.EMAIL_PASS) throw new Error("Missing EMAIL_PASS in environment env file.");


// ==========================================================
//                Configuration Variabels
// ==========================================================

const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL + process.env.DATABASE_NAME;
const jwtSecret = process.env.JWT_SECRET_KEY;
const domain = nodeEnv === 'local' ? `http://${getIPAddress()}:${port}` : process.env.DOMAIN;

// for sending emails
const serviceEmail = process.env.EMAIL;
const serviceEmailPass = process.env.EMAIL_PASS;
export {
    nodeEnv,
    port,
    dbUrl,
    jwtSecret,
    domain,
    serviceEmail,
    serviceEmailPass,
}