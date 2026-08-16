import User from "../../models/auth/user.model.js";

export const seedUsers = async () => {
    const users = [
        {
            roleId: 1,
            firstName: 'Ali',
            lastName: 'Khan',
            email: 'ali@email.com',
            phone: '1234567891',
            password: '12345678',
            gender: 'male',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'dark',
                language: 'en',
            }
        },
        {
            roleId: 2,
            firstName: 'Hania',
            lastName: 'Khan',
            email: 'hania@email.com',
            phone: '1234567892',
            password: '12345678',
            gender: 'female',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'light',
                language: 'en',
            }
        },
        {
            roleId: 3,
            firstName: 'Hania',
            lastName: 'Amir',
            email: 'haniaamir@email.com',
            phone: '1234567893',
            password: '12345678',
            gender: 'female',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'light',
                language: 'en',
            }
        },
        {
            roleId: 4,
            firstName: 'Hania',
            lastName: 'Amir',
            email: 'hania4amir@email.com',
            phone: '12345678934',
            password: '12345678',
            gender: 'female',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'light',
                language: 'en',
            }
        },
        {
            roleId: 5,
            firstName: 'Hania',
            lastName: 'Amir',
            email: 'haniaami5r@email.com',
            phone: '12345678932',
            password: '12345678',
            gender: 'female',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'light',
                language: 'en',
            }
        },
        {
            roleId: 6,
            firstName: 'Hania',
            lastName: 'Amir',
            email: 'haniaami6r@email.com',
            phone: '12345678936',
            password: '12345678',
            gender: 'female',
            status: 'active',
            experience: 5,
            skills: ['Node.js', 'Express.js', 'Mysql', 'MongoDB', 'Php', 'Laravel', 'Html', 'Css', 'Boostrap'],
            preferences: {
                theme: 'light',
                language: 'en',
            }
        }
    ];
    await User.bulkCreate(users, {
        ignoreDuplicates: true,
    });
    console.log("User seeded successfully");
}
