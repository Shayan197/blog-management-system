import Role from "../../models/auth/role.model.js";

export const seedRoles = async () => {
    const roles = [
        {
            name: "Super Admin",
            slug: "super-admin",
            description: "System Owner",
            priority: 1,
            color: '#ff0000',
            icon: 'sheild',
            isSystem: true,
        },
        {
            name: "Admin",
            slug: "admin",
            description: "Platform Administrator",
            priority: 2,
            color: '#ff8800',
            icon: 'admin',
            isSystem: true,
        },
        {
            name: "Editor",
            slug: "editor",
            description: "Platform Content Editor",
            priority: 3,
            color: '#00aa00',
            icon: 'edit',
            isSystem: true,
        },
        {
            name: "Author",
            slug: "author",
            description: "Write Blogs",
            priority: 4,
            color: '#0066ff',
            icon: 'pen-to-square',
            isSystem: true,
        },
        {
            name: "Moderator",
            slug: "moderator",
            description: "Manages Comments",
            priority: 5,
            color: '#9900cc',
            icon: 'message',
            isSystem: true,
        },
        {
            name: "Subscriber",
            slug: "subscriber",
            description: "Reads Content",
            priority: 6,
            color: '#666666',
            icon: 'user',
            isSystem: true,
        }
    ];
    await Role.bulkCreate(roles, {
        ignoreDuplicates: true,
    });
    console.log("Role seeded successfully");
}