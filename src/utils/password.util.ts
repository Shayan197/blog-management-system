import bcrypt from 'bcrypt';

// ============================ hashPassword =================================

// Function to generate a hashed password asynchronously
export const hashPassword = async (password: string): Promise<string> => {
    // Generate a salt with a cost factor of 12
    const salt = await bcrypt.genSalt(12);
    // Hash the provided password using the generated salt
    const hash = await bcrypt.hash(password, salt);
    // Return the hashed password
    return hash;
};

// ============================ comparePassword =================================

// Function to compare a plain password with a hashed password asynchronously
export const comparePassword = async (
    password: string,
    hashedPassword: string,
): Promise<boolean> => {
    // Compare the provided password with the hashed password securely
    return await bcrypt.compare(password, hashedPassword);
};

// ============================ validatePassword =================================

export const validatePassword = (password: string, confirmPassword?: string): string | null => {
    if (!password) {
        return 'password is required';
    }
    if (confirmPassword && password !== confirmPassword) {
        return 'password and confirm password does not match';
    }
    if (password.length < 8) {
        return 'password must be at least 8 characters long';
    }
    // strong password
    const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
        return 'password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character';
    }
    return null;
};
